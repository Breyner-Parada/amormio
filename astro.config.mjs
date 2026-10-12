// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// Producción (Dokploy): escuchar en todas las interfaces y aceptar el dominio público
	server: { host: true, port: 4321 },
	vite: {
		plugins: [tailwindcss()],
		preview: { allowedHosts: true },
	},
});
