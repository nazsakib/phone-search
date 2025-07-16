// js/layout.js

document.addEventListener("DOMContentLoaded", () => {
    const header = `
    <header class="bg-gray-900 text-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold">PhoneShow</h1>
        <nav class="space-x-6">
          <a href="index.html" class="hover:text-yellow-400">Home</a>
          <a href="about.html" class="hover:text-yellow-400">About</a>
          <a href="contact.html" class="hover:text-yellow-400">Contact</a>
        </nav>
      </div>
    </header>
  `;

    const footer = `
    <footer class="bg-gray-800 text-white mt-10">
      <div class="max-w-7xl mx-auto px-4 py-6 text-center">
        <p class="text-sm">&copy; ${new Date().getFullYear()} PhoneShow. All rights reserved.</p>
      </div>
    </footer>
  `;

    document.getElementById("header").innerHTML = header;
    document.getElementById("footer").innerHTML = footer;
});
