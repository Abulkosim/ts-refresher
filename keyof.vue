<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="email">Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        :value="form.email"
        @input="onInput"
      />
    </div>

    <div>
      <label for="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        :value="form.password"
        @input="onInput"
      />
    </div>

    <button type="submit">Log In</button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { LoginForm } from '@/types/LoginForm';

// Initialize reactive form state
const form = reactive<LoginForm>({
  email: '',
  password: '',
});

// Generic updater using keyof
function updateField<K extends keyof LoginForm>(field: K, value: LoginForm[K]) {
  form[field] = value;
}

// Event handler for all inputs
function onInput(e: Event) {
  const target = e.target as HTMLInputElement;
  const key = target.name as keyof LoginForm;
  const value = target.value as LoginForm[typeof key];
  updateField(key, value);
}

// Submission handler
function onSubmit() {
  console.log('Form values:', { ...form });
  // Place your API call or further logic here
}
</script>

<style scoped>
/* Optional styling */
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
label {
  font-weight: bold;
}
input {
  padding: 0.5rem;
  font-size: 1rem;
}
button {
  width: 100px;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>
