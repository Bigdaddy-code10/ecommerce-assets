import { serve } from "inngest/next";

import {
  inngest,
  syncUserCreation,
  syncUserDeletion,
  syncUserUpdating,
} from "@/config/inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserDeletion,
    syncUserUpdating,
    //createUserOrder,

    /* your functions will be passed here later! */
  ],
});
