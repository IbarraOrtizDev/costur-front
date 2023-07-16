<template>
  <div>
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el label="Clients" />
    </q-breadcrumbs>
    <div class="q-ma-md">
      <q-table
        title="Clientes"
        :rows="clients"
        :columns="columns"
        row-key="name"
        :filter="filter"
      >
        <template v-slot:top-right>
          <q-input
            borderless
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body="props">
          <q-tr>
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
            <q-td key="Id" :props="props">
              <q-btn
                flat
                round
                color="primary"
                icon="edit"
                @click="editar(props.row.Id)"
              />
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
    <q-page-sticky position="bottom-right" :offset="[30, 30]" expand>
      <q-fab
        class="q-fab--absolute q-fab--bottom-right"
        icon="add"
        color="primary"
        direction="up"
      >
        <q-fab-action
          color="primary"
          icon="add_business"
          title="Crear cliente"
          @click="addClient"
        />
        <q-fab-action
          color="primary"
          icon="upload_file"
          title="Importar clientes desde excel"
          @click="canImport = true"
        />
      </q-fab>
    </q-page-sticky>

    <content-alert
      :toolbar="toolbar"
      title="Crear cliente"
      icon="add_business"
      @update:toolbar="toolbar = $event"
    >
      <create-client @create:ok="usuarioCreado" />
    </content-alert>

    <content-alert
      :toolbar="updateClient.canEdit"
      :title="updateClient.title"
      icon="edit"
      width="500px"
      @update:toolbar="updateClient.canEdit = $event"
    >
      <edit-client
        @update:ok="usuarioActualizado"
        :idClient="updateClient.id"
      />
    </content-alert>

    <content-alert
      :toolbar="canImport"
      title="Importar Clientes"
      icon="upload_file"
      width="1000px"
      @update:toolbar="canImport = $event"
    >
      <import-client />
    </content-alert>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import ContentAlert from "components/ContentAlert.vue";
import CreateClient from "pages/company/clients/CreateClient.vue";
import EditClient from "pages/company/clients/EditClient.vue";
import ImportClient from "pages/company/clients/ImportClient.vue";
import { getClients } from "../../../services/clientService";

const columns = [
  {
    name: "CodClient",
    required: true,
    label: "Código",
    align: "left",
    field: "CodClient",
    sortable: true,
  },
  {
    name: "NameClient",
    required: true,
    label: "Name",
    align: "left",
    field: (client) => client.NameClient,
    sortable: true,
  },
  {
    name: "NitClient",
    align: "left",
    label: "Nit",
    field: "NitClient",
    sortable: true,
  },
  {
    name: "ContactClient",
    align: "left",
    label: "Contacto",
    field: "ContactClient",
    sortable: true,
  },
  {
    name: "EmailClient",
    align: "left",
    label: "Email",
    field: "EmailClient",
    sortable: true,
  },
  {
    name: "PhoneClientOne",
    align: "left",
    label: "Teléfono 1",
    field: "PhoneClientOne",
    sortable: true,
  },
  {
    name: "PhoneClientOne",
    align: "left",
    label: "Teléfono 2",
    field: "PhoneClientOne",
    sortable: true,
  },
  {
    name: "CityClient",
    align: "left",
    label: "Ciudad",
    field: "CityClient",
    sortable: true,
  },
  {
    name: "Id",
    align: "left",
    label: "Acciones",
    field: "Id",
    sortable: true,
  },
];
const clients = reactive([]);

const updateClient = reactive({
  title: "Editar",
  canEdit: false,
  id: "",
});

const canImport = ref(false);

const toolbar = ref(false);
const filter = ref("");

const addClient = () => {
  toolbar.value = true;
};
const obtenerClientes = async () => {
  const clientsResponse = await getClients();
  clients.splice(0, clients.length);
  clients.push(...clientsResponse);
};

const editar = (client) => {
  clients.forEach((element) => {
    if (element.Id === client) {
      updateClient.id = element.Id;
      updateClient.title = "Editando " + element.NameClient;
      updateClient.canEdit = true;
    }
  });
};

const usuarioCreado = async (event) => {
  toolbar.value = false;
  clients.push(event);
};

const usuarioActualizado = async (event) => {
  obtenerClientes();
  updateClient.canEdit = false;
};

onMounted(async () => {
  await obtenerClientes();
});
</script>

<style scoped></style>
