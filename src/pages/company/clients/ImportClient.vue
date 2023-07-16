<template>
  <div>
    <q-file
      accept=".csv"
      filled
      bottom-slots
      v-model="model"
      label="Importar desde excel"
      counter
      class="q-ma-md"
      @update:model-value="importar"
      style="max-width: 500px"
    >
      <template v-slot:prepend>
        <q-icon name="note_add" @click.stop.prevent />
      </template>
      <template v-slot:append>
        <q-icon
          name="close"
          @click.stop.prevent="model = null"
          class="cursor-pointer"
        />
      </template>

      <template v-slot:hint> Field hint </template>
    </q-file>
    <br />
    <q-table
      v-if="clients.length > 0"
      title="Clientes"
      :rows="clients"
      :columns="columns"
      row-key="name"
      selection="multiple"
      v-model:selected="selected"
    >
      <template v-slot:header-selection="scope">
        <q-toggle
          @update:model-value="changeValueSelected"
          v-model="scope.selected"
        />
      </template>

      <template v-slot:body="props">
        <q-tr>
          <q-td
            key="CodClient"
            :props="props"
            style="display: flex; place-content: center"
          >
            <q-icon
              v-if="props.row.Cargo && props.row.Error"
              name="error"
              color="negative"
              size="md"
              :title="props.row.Mensaje"
            />
            <q-inner-loading
              v-else-if="props.row.Cargando"
              size="sm"
              :showing="true"
            />
            <q-icon
              v-else-if="props.row.Cargo && !props.row.Error"
              name="check"
              size="md"
              color="primary"
            />
            <q-checkbox
              v-else
              left-label
              v-model="props.row.Selected"
              @update:model-value="changeValueCheck"
            />
          </q-td>
          <q-td key="CodClient" :props="props">
            {{ "C" + props.row.CodClient.toString().padStart(3, "0") }}
          </q-td>
          <q-td key="NameClient" :props="props">
            {{ props.row.NameClient }}
          </q-td>
          <q-td key="NitClient" :props="props">
            {{ props.row.NitClient }}
          </q-td>
          <q-td key="ContactClient" :props="props">
            {{ props.row.ContactClient }}
          </q-td>
          <q-td key="EmailClient" :props="props">
            {{ props.row.EmailClient }}
          </q-td>
          <q-td key="PhoneClientOne" :props="props">
            {{ props.row.PhoneClientOne }}
          </q-td>
          <q-td key="PhoneClientOne" :props="props">
            {{ props.row.PhoneClientTwo }}
          </q-td>
          <q-td key="CityClient" :props="props">
            {{ props.row.CityClient }}
          </q-td>
          <q-td key="AddressClient" :props="props">
            {{ props.row.CityClient }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <br />
    <div class="row justify-end">
      <q-btn color="warning q-ma-md" icon="check" label="CANCELAR" />
      <q-btn
        color="primary q-ma-md"
        icon="check"
        label="GUARDAR"
        @click="crearData"
      />
    </div>
  </div>
</template>
<style></style>
<script setup>
import { QCheckbox } from "quasar";
import { ref, reactive } from "vue";
import { createClient } from "src/services/clientService";

const model = ref(null);
const selected = ref([]);

const columns = [
  {
    name: "CodClient",
    required: true,
    label: "Código",
    align: "left",
    field: "CodClient",
  },
  {
    name: "NameClient",
    required: true,
    label: "Name",
    align: "left",
    field: (client) => client.NameClient,
  },
  {
    name: "NitClient",
    align: "left",
    label: "Nit",
    field: "NitClient",
  },
  {
    name: "ContactClient",
    align: "left",
    label: "Contacto",
    field: "ContactClient",
  },
  {
    name: "EmailClient",
    align: "left",
    label: "Email",
    field: "EmailClient",
  },
  {
    name: "PhoneClientOne",
    align: "left",
    label: "Teléfono 1",
    field: "PhoneClientOne",
  },
  {
    name: "PhoneClientOne",
    align: "left",
    label: "Teléfono 2",
    field: "PhoneClientOne",
  },
  {
    name: "CityClient",
    align: "left",
    label: "Ciudad",
    field: "CityClient",
  },
  {
    name: "AddressClient",
    align: "left",
    label: "Address",
    field: "AddressClient",
  },
];

const clients = reactive([]);

const importar = () => {
  const reader = new FileReader();

  reader.onload = (event) => {
    const csvData = event.target.result;
    const data = convertCSVtoJson(csvData);
    console.log(data);
    clients.push(...data);
  };

  reader.readAsText(model.value);
};
function convertCSVtoArray(dataCSV) {
  const lines = dataCSV.split(/\r\n|\n/);
  return lines.map((line, index) => {
    line = index + "," + line.trim();
    return line.replaceAll('"', "").toUpperCase().split(",");
  });
}
function convertCSVtoJson(dataCSV) {
  let data = convertCSVtoArray(dataCSV);
  data.splice(0, 1);
  console.log(data);
  if (data[0].length !== 10) return [];
  let headers = [
    "Id",
    "CodClient",
    "NitClient",
    "NameClient",
    "PhoneClientOne",
    "PhoneClientTwo",
    "EmailClient",
    "AddressClient",
    "CityClient",
    "ContactClient",
  ];
  return data.map((ele) => {
    let obj = {};
    for (let i = 0; i < headers.length; i++) {
      obj[headers[i]] = ele[i];
    }
    obj.IdCompany = "00000000-0000-0000-0000-000000000000";
    obj.Cargando = false;
    obj.Cargo = false;
    obj.Error = false;
    obj.Mensaje = "";
    obj.Selected = false;
    return obj;
  });
}

function changeValueCheck() {
  selected.value = clients.filter((ele) => ele.Selected === true);
}

function changeValueSelected(event) {
  clients.forEach((ele) => {
    if (!ele.Cargo) {
      ele.Selected = event;
    }
  });
}

async function crearData() {
  let indice = 0;
  let creado = await crearComplete(indice);
}

async function crearComplete(indice) {
  let data = clients[indice];

  if (data.Selected === false) return true;
  data.Cargando = true;
  try {
    await createClient(data);
    clients[indice].Error = false;
    clients[indice].Mensaje = "Cliente creado correctamente";
  } catch (error) {
    clients[indice].Error = true;
    clients[indice].Mensaje = error.response.data.Message;
  } finally {
    clients[indice].Cargo = true;
    clients[indice].Cargando = false;
    clients[indice].Selected = false;
    indice++;
    if (indice < clients.length) {
      await crearComplete(indice);
    }
  }
}
</script>
