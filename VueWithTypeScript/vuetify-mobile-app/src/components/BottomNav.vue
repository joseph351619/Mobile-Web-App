<template>
    <v-bottom-navigation app fixed :value="true">
        <v-btn text color="primary" :to="{path:'/'}">
            <span>Top Stories</span>
            <v-icon>thumb_up</v-icon>
        </v-btn>

        <v-btn text color="primary" :to="{name:'code-examples'}">
            <span>Code Examples</span>
            <v-icon>code</v-icon>
        </v-btn>

        <v-btn text color="primary" :to="{name: 'my-favorites'}">
            <span>favorites</span>
            <v-icon>favorites</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';

@Component
export default class BottomNav extends Vue{
}
</script>