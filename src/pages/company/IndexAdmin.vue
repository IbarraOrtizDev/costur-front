<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> {{ infoCompany.NameCompany }} </q-toolbar-title>
        <q-btn round flat title="Cerrar Sesion" @click="closeSesion()">
          <q-avatar
            size="30px"
            font-size="15px"
            text-color="white"
            icon="logout"
          />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="q-ma-md">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import useAuth from "app/src/stores/Auth";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Clientes",
    caption: "",
    icon: "store",
    link: "clients",
  },
];
const auth = useAuth();
export default defineComponent({
  name: "MainLayout",
  components: {
    EssentialLink,
  },

  methods: {
    closeSesion() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const infoCompany = reactive(auth.company);

    onMounted(() => {
      const route = useRoute();
      if (route.path == "/home") {
        const router = useRouter();
        router.push("/home/projects");
      }
    });

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      infoCompany,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style scoped></style>
