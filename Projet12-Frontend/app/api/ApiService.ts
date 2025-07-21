import MockApiService from "./mockApiService";
import RealApiService from "./realApiService";

const stringToBool = (string: string) => {
  return { true: true, false: false }[string];
};

const USE_MOCK_API = stringToBool(import.meta.env.VITE_USE_MOCK);

export default USE_MOCK_API ? MockApiService : RealApiService;
