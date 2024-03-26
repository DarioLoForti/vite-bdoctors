import{ reactive } from 'vue';

export const store = reactive({

    baseUrl: 'http://127.0.0.1:8000',

    menu: [
        {
            name:'home',
            label: 'Home',
        },
        {
            name:'doctors',
            label: 'Dottori',
        },
        {
            name:'specializations',
            label: 'Specializzazioni',
        },
    ],

    specializations: [], 
});
