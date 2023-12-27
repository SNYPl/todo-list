import { z } from "zod";

const taskSchema = z.object({
  id: z.number(),
  title: z.string(),
  info: z.string(),
  status: z.string(),
});

export const tasksSchema = z.array(taskSchema);
