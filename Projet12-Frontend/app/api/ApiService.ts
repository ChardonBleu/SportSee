import MockApiService from "./mockApiService"
import RealApiService from "./realApiService"

const stringtoBool = (string: string) => {
    return ({'true': true, 'false': false})[string]
}

const USE_MOCK_API = stringtoBool(import.meta.env.VITE_USE_MOCK)

export default USE_MOCK_API ? MockApiService : RealApiService

