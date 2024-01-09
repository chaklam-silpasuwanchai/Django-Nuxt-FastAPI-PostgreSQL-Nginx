<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="12" md="6" xl="4">
        <!-- <IndexProfile></IndexProfile> -->
        <v-row justify="center">
          <div style="width:80px;height:80px;position:relative; margin-top: 15px;"><iframe
              src="https://giphy.com/embed/gx54W1mSpeYMg" width="100%" height="100%" style="position:absolute"
              frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="6" xl="4">
        <v-row no-gutters>
          <v-col cols="12">
            <v-card>
              <v-tabs color="primary-accent" v-model="tab" align-tabs="center">
                <v-tab :value="1">Résumé</v-tab>
                <v-tab :value="2">Academic</v-tab>
                <v-tab :value="3">Work</v-tab>
                <v-tab :value="4">Hobby</v-tab>
              </v-tabs>
              <v-divider></v-divider>
              <v-window v-model="tab">
                <v-window-item :key=1 :value=1>
                  <IndexResume></IndexResume>
                </v-window-item>
                <v-window-item :key=2 :value=2>
                  Insert Academic life
                </v-window-item>
                <v-window-item :key=3 :value=3>
                  Insert Work life
                </v-window-item>
                <v-window-item :key=4 :value=4>
                  Insert Hobby
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
        <!-- <v-row>
          <v-col cols="12">

            <v-card flat prepend-icon="mdi-history">
              <template v-slot:title>
                Previous
              </template>
              <v-card-item>
                <div class="d-flex ga-2">
                  <v-chip variant="flat" color='success' prepend-icon="mdi-school">Master</v-chip>
                  <v-chip variant="flat" color='success' prepend-icon="mdi-calendar-month">Aug 2018 - July 2020</v-chip>
                  <v-chip variant="flat" color='info' prepend-icon="mdi-map-marker">AIT</v-chip>
                </div>
              </v-card-item>

              <v-card-text>
                I graduted👨🏼‍🎓 my master in Computer Science (CS) at Asian Institute of Technology (AIT), Thailand🇹🇭.
                My master research topic is <i>Solving First Grade Mathamatic Problem using Natural Language
                  Processing</i>.

                <br><br>
                <b>Project I worked on:</b>
                <li><a target="_black" href="https://exam.cs.ait.ac.th/">PracXam</a>: Exam reposistory for CSIM</li>
                <li>Face recognition with liveliness deteion using homography</li>

                <br>
                <b>Participation:</b>
                <li>📷 Media Chairperson of AIT Student Union in August 2019</li>
                <li>🎸 Represent Thailand Music Group in every semesters</li>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row> -->

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const tab = ref(null)

// definePageMeta({
//   layout: 'document'
// })
</script>