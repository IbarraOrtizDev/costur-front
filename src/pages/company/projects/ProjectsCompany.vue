<template>
  <div class="q-ma-md">
    <q-btn flat v-for="proj in projectsCompany" :key="proj.Id">
      <q-card class="my-card">
        <q-img
          :src="proj.Project.IconProject"
          spinner-color="primary"
          spinner-size="82px"
        >
          <div class="absolute-bottom text-h6">
            {{ proj.Project.NameProject }}
          </div>
        </q-img>
        <q-card-section>
          {{ proj.Project.DescriptionProject }}
        </q-card-section>
      </q-card>
    </q-btn>
  </div>
</template>
<script setup>
import { onMounted, reactive } from "vue";
import { useQuasar } from "quasar";
import { getProjectsCompany } from "app/src/services/projectsCompany";

const $q = useQuasar();
const projectsCompany = reactive([]);

onMounted(() => {
  obtenerProyectos();
});
async function obtenerProyectos() {
  try {
    const data = await getProjectsCompany();
    projectsCompany.push(...data);
    //console.log(projectsCompany);
    //projectsCompany.data = data;
    //console.log(projectsCompany.data[0].ProjectId);
  } catch (error) {
    $q.notify({
      type: "negative",
      message: error,
    });
  }
}
</script>
