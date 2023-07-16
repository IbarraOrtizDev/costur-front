<template>
  <q-card class="my-card" style="width: 100%">
    <form @submit.prevent.stop="addClient">
      <q-card-section>
        <q-input
          v-model="datosNewClient.CodClient"
          ref="codClientRef"
          label="Código *"
          :dense="dense"
          outlined
          class="q-mb-md"
          :rules="codRules"
          lazy-rules
        />
        <q-input
          v-model="datosNewClient.NitClient"
          ref="nitClientRef"
          label="Nit *"
          :dense="dense"
          outlined
          class="q-mb-md"
          :rules="nitRules"
        />
        <q-input
          v-model="datosNewClient.NameClient"
          ref="nameClientRef"
          label="Nombre *"
          :dense="dense"
          outlined
          class="q-mb-md"
          :rules="nameRules"
        />
        <q-input
          v-model="datosNewClient.PhoneClientOne"
          ref="phoneClientOneRef"
          label="Telefono 1 *"
          :dense="dense"
          outlined
          class="q-mb-md"
          :rules="phoneRules"
        />
        <q-input
          v-model="datosNewClient.PhoneClientTwo"
          ref="phoneClientTwoRef"
          label="Telefono 2 *"
          :dense="dense"
          outlined
          class="q-mb-md"
          :rules="phoneRules"
        />
        <q-input
          v-model="datosNewClient.EmailClient"
          ref="emailClientRef"
          label="Email *"
          :dense="dense"
          outlined
          class="q-mb-md"
          :rules="emailRules"
        />
        <q-input
          v-model="datosNewClient.AddressClient"
          ref="addressClientRef"
          label="Dirección *"
          :dense="dense"
          outlined
          class="q-mb-md"
          :rules="textRules"
        />
        <q-input
          v-model="datosNewClient.CityClient"
          ref="cityClientRef"
          label="Ciudad *"
          :dense="dense"
          outlined
          class="q-mb-md"
          :rules="textRules"
        />
        <q-input
          v-model="datosNewClient.ContactClient"
          ref="contactClientRef"
          label="Contacto *"
          :dense="dense"
          outlined
          :rules="textRules"
        />
      </q-card-section>
      <q-card-actions vertical align="center">
        <q-btn
          type="submit"
          color="primary"
          label="Crear"
          icon="add"
          style="width: 80%"
          size="16px"
        />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script setup>
import { ref, reactive, defineEmits } from "vue";
import { useQuasar } from "quasar";
import useAuth from "app/src/stores/Auth";
import { createClient } from "app/src/services/clientService";
import {
  nameRules,
  codRules,
  nitRules,
  phoneRules,
  emailRules,
  textRules,
} from "app/src/helpers/validationsForm.js";

const $q = useQuasar();
const auth = useAuth();
const dense = ref(false);
const text = ref("");
const datosNewClient = reactive({
  CodClient: "",
  NitClient: "",
  NameClient: "",
  PhoneClientOne: "",
  PhoneClientTwo: "",
  EmailClient: "",
  AddressClient: "",
  CityClient: "",
  ContactClient: "",
  IdCompany: auth.company.IdCompany,
});
const codClientRef = ref("");
const nitClientRef = ref("");
const nameClientRef = ref("");
const phoneClientOneRef = ref("");
const phoneClientTwoRef = ref("");
const emailClientRef = ref("");
const addressClientRef = ref("");
const cityClientRef = ref("");
const contactClientRef = ref("");

const addClient = async () => {
  codClientRef.value.validate();
  nitClientRef.value.validate();
  nameClientRef.value.validate();
  phoneClientOneRef.value.validate();
  phoneClientTwoRef.value.validate();
  emailClientRef.value.validate();
  addressClientRef.value.validate();
  cityClientRef.value.validate();
  contactClientRef.value.validate();

  if (
    codClientRef.value.hasError ||
    nitClientRef.value.hasError ||
    nameClientRef.value.hasError ||
    phoneClientOneRef.value.hasError ||
    phoneClientTwoRef.value.hasError ||
    emailClientRef.value.hasError ||
    addressClientRef.value.hasError ||
    cityClientRef.value.hasError ||
    contactClientRef.value.hasError
  ) {
    return;
  }
  $q.loading.show({
    message: "Creando cliente...",
  });
  try {
    let creado = await createClient(datosNewClient);
    emits("create:ok", creado);
  } catch (error) {
    $q.notify({
      color: "negative",
      message: error.response.data.Message,
      icon: "report_problem",
    });
  } finally {
    $q.loading.hide();
  }
};

const emits = defineEmits(["create:ok"]);
</script>
