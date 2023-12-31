<template>
  <div v-if="!isLogueado">
    <img src="../assets/wave.png" class="wave" alt="login-wave" />
    <div class="row" style="height: 90vh">
      <div class="col-0 col-md-6 flex justify-center content-center">
        <img src="../assets/login.svg" class="responsive" alt="login-image" />
      </div>
      <div
        v-bind:class="{
          'justify-center': $q.screen.md || $q.screen.sm || $q.screen.xs,
        }"
        class="col-12 col-md-6 flex content-center"
      >
        <q-card
          v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '60%' }"
        >
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img src="../assets/avatar.svg" alt="avatar" />
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="q-pt-lg">
              <div class="col text-h6 ellipsis flex justify-center">
                <h2
                  class="text-h2 text-uppercase q-my-none text-weight-regular"
                >
                  Login
                </h2>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md" @submit.prevent="submitForm">
              <q-input label="Email" v-model="login.email"> </q-input>
              <q-input
                label="Password"
                type="password"
                v-model="login.password"
              >
              </q-input>
              <div>
                <q-btn
                  class="full-width"
                  color="primary"
                  label="Login"
                  type="submit"
                  rounded
                ></q-btn>
                <div class="text-center q-mt-sm q-gutter-lg">
                  <router-link class="text-white" to="/login"
                    >Esqueceu a senha?</router-link
                  >
                  <router-link class="text-white" to="/login"
                    >Criar conta</router-link
                  >
                </div>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import useAuth from "app/src/stores/Auth";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { onBeforeMount, ref } from "vue";

const authStore = useAuth();
const route = useRouter();

let $q = useQuasar();

const login = reactive({
  email: "",
  password: "",
});
const isLogueado = ref(true);

const submitForm = async () => {
  if (!login.email || !login.password) {
    $q.notify({
      type: "negative",
      message:
        "Debes completar todos los campos para continuar con la operación.",
    });
  } else {
    $q.loading.show({
      message: "Iniciando sesión...",
    });
    try {
      let isLogueado = await authStore.doLogin(login);
      if (!isLogueado) {
        throw new Error("Error al iniciar sesión");
      }
      redirigirAdmin();
    } catch (err) {
      if (err) {
        $q.notify({
          type: "negative",
          message: err,
        });
      }
    } finally {
      $q.loading.hide();
    }
  }
};

const redirigirAdmin = () => {
  const toPath = {
    path: "/home",
  };
  route.push(toPath);
};

onBeforeMount(async () => {
  let init = await authStore.init();
  if (init) {
    redirigirAdmin();
  } else {
    isLogueado.value = false;
  }
});
</script>

<style scoped>
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
