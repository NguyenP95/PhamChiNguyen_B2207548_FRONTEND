<template>
    <div class="page">
      <h4>Thêm Liên hệ</h4>
      <ContactForm
        :contact="newContact"
        @submit:contact="createContact"
      />
      <p>{{ message }}</p>
    </div>
  </template>
  <script>
  import ContactForm from "@/components/ContactForm.vue";
  import ContactService from "@/services/contact.service";
  export default {
    components: {
      ContactForm,
    },
    data() {
      return {
        message: "",
        newContact: {
          name: '',
          email: '',
          address: '',
          phone: '',
          favorite: false,
        },
      };
    },
    methods: {
      async createContact(data) {
        try {
          await ContactService.create(data);
          alert("Liên hệ mới đã được tạo thành công.");
          this.$router.push({ name: "contactbook" });
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
  </script>
  