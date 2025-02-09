<script lang="ts">
  import { calculateYearsAndMonths } from '../utils/index';
  const details = {
    // age: "28",
    dob: "06 July, 1993",
    email: "kadamdnyanesh248@gmail.com",
    phone: "+91 9561116995",
    address: "Hadapsar, Pune (MH), India - 411028",
    maritalStatus: "Married",
    languages: ["Marathi (Native)", "Hindi", "English"],
    availability: "Available for remote work"
  };
</script>

<section id="personal-details" class="mb-12 animate-fade-in">
  <h2 class="section-title">Personal Details</h2>
  <div class="card grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="flex items-center">
      <svg class="w-5 h-5 mr-3 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400">Email</p>
        <p class="font-medium">{details.email}</p>
      </div>
    </div>
    <div class="flex items-center">
      <svg class="w-5 h-5 mr-3 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400">Phone</p>
        <p class="font-medium">{details.phone}</p>
      </div>
    </div>
    <!-- <div class="flex items-center">
      <svg class="w-5 h-5 mr-3 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400">Age</p>
        <p class="font-medium">{details.age}</p>
      </div>
    </div> -->
    <div class="flex items-center">
      <svg class="w-5 h-5 mr-3 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400">Date of Birth</p>
        <p class="font-medium">{details.dob} ({calculateYearsAndMonths("1993-07-06")?.years} yrs)</p>
      </div>
    </div>
    <div class="flex items-center">
      <svg class="w-5 h-5 mr-3 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400">Address</p>
        <p class="font-medium">{details.address}</p>
      </div>
    </div>
    <div class="flex items-center">
      <svg class="w-5 h-5 mr-3 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400">Marital Status</p>
        <p class="font-medium">{details.maritalStatus}</p>
      </div>
    </div>
    <div class="flex items-center">
      <svg class="w-5 h-5 mr-3 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400">Languages</p>
        <p class="font-medium">{details.languages.join(" • ")}</p>
      </div>
    </div>
  </div>
</section>