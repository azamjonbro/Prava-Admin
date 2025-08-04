<template>
    <div v-html="getIcon(name)" style="cursor: pointer; display: flex; align-items: center;" v-if="iconExists">

    </div>
</template>

<script>

export default {
    name: "IconComponents",
    props: {
        name: {
            type: String,
            requiret: true,
        },
    },
    data() {
        return {
            icons: {
                deleted: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">  <path d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M7.08325 4.14175L7.26659 3.05008C7.39992 2.25841 7.49992 1.66675 8.90825 1.66675H11.0916C12.4999 1.66675 12.6083 2.29175 12.7333 3.05841L12.9166 4.14175" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M15.7084 7.6167L15.1667 16.0084C15.0751 17.3167 15.0001 18.3334 12.6751 18.3334H7.32508C5.00008 18.3334 4.92508 17.3167 4.83341 16.0084L4.29175 7.6167" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M8.6084 13.75H11.3834" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M7.91675 10.4167H12.0834" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                hide: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.0001 20.27C15.5301 20.27 18.8201 18.19 21.1101 14.59C22.0101 13.18 22.0101 10.81 21.1101 9.39997C18.8201 5.79997 15.5301 3.71997 12.0001 3.71997C8.47009 3.71997 5.18009 5.79997 2.89009 9.39997C1.99009 10.81 1.99009 13.18 2.89009 14.59C5.18009 18.19 8.47009 20.27 12.0001 20.27Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>`,
                update: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                 <path d="M11.89 5.05C12.32 7.81 14.56 9.92 17.34 10.2M3 22H21M13.26 3.6L5.05 12.29C4.74 12.62 4.44 13.27 4.38 13.72L4.01 16.96C3.88 18.13 4.72 18.93 5.88 18.73L9.1 18.18C9.55 18.1 10.18 17.77 10.49 17.43L18.7 8.74C20.12 7.24 20.76 5.53 18.55 3.44C16.35 1.37 14.68 2.1 13.26 3.6Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
                closehide: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.53 9.47L9.47 14.53M14.53 9.47C13.88 8.82 12.99 8.42 12 8.42C10.02 8.42 8.42 10.02 8.42 12C8.42 12.99 8.82 13.88 9.47 14.53M14.53 9.47L22 2M9.47 14.53L2 22M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73C8.47 3.73 5.18 5.81 2.89 9.41C1.99 10.82 1.99 13.19 2.89 14.6C3.68 15.84 4.6 16.91 5.6 17.77M8.42 19.53C9.56 20.01 10.77 20.27 12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.4C20.78 8.88 20.42 8.39 20.05 7.93M15.51 12.7C15.25 14.11 14.1 15.26 12.69 15.52" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
                password:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" stroke="gray " stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`


            },
        }
    },
    computed: {
        iconExists() {
            return !!this.icons[this.name]
        }
    },
    methods: {
        getIcon(name) {
            return this.icons[name] || `<span>Icon not found</span>`
        }
    }
};
</script>

<style scoped></style>
