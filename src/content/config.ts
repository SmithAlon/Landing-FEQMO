import { defineCollection, z } from 'astro:content';

const seccionesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    imagen: z.string(),
  })
});

const proyectos = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    ubicacion: z.string(),
    imagen: z.string(),
  })
});

export const collections = {
  'secciones': seccionesCollection,
  'proyectos': proyectos
};