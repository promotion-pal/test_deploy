// import { isApiError } from './fetch';

// type ApiRequestFunction = () => Promise<any>;

// interface RequestHandlerOptions {
//   on400?: () => void;
//   on403?: () => void;
//   on404?: () => void;
//   on500?: () => void;
// }

// export async function RequestHandler(
//   request: ApiRequestFunction,
//   options?: RequestHandlerOptions
// ) {
//   try {
//     return await request();
//   } catch (error) {
//     if (isApiError(error)) {
//       switch (error.status) {
//         case 403:
//           options?.on403?.();
//           break;
//         case 400:
//           options?.on400?.();
//           break;
//         case 404:
//           options?.on404?.();
//           break;
//         case 500:
//           options?.on500?.();
//           break;
//         default:
//           break;
//       }
//     }
//     throw error;
//   }
// }
