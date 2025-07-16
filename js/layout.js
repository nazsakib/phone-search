// js/layout.js
document.addEventListener("DOMContentLoaded", () => {
    const header = `
    <header class="bg-gray-900 text-white shadow">
      <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="https://nazsakib.github.io/phone-search" class="flex items-center gap-2">
          <img src="images/phone.png" alt="PhoneShow" class="h-8" />
          <h1 class="text-xl font-bold text-white">PhoneShow</h1>
        </a>
        <nav class="space-x-6 text-sm">
          <a href="index.html" class="hover:text-yellow-400">Home</a>
          <a href="about.html" class="hover:text-yellow-400">About</a>
          <a href="mailto:sakibsnaz@gmail.com" class="hover:text-yellow-400">Contact</a>
        </nav>
      </div>
    </header>
  `;

    const footer = `
    <footer class="bg-gray-800 text-white mt-12">
      <div class="max-w-7xl mx-auto px-4 py-6 text-center text-sm">
        &copy; ${new Date().getFullYear()} PhoneShow. All rights reserved.
      </div>
    </footer>
  `;

    document.getElementById("header").innerHTML = header;
    document.getElementById("footer").innerHTML = footer;
});
