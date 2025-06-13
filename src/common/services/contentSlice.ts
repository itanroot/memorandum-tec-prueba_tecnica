import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// Esta funcion se encarga de obtener el contenido pediante un json API, el que se compartio en bitbucket
export const fetchContent = createAsyncThunk('content/fetchContent', async () => {
  const res = await fetch('/feed/sample.json')
  const data = await res.json()
  return data.entries
})
// Creamos un slice de redux para manejar el estado del contenido
const contentSlice = createSlice({
  name: 'content',
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContent.pending, state => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchContent.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
      })
      .addCase(fetchContent.rejected, state => {
        state.loading = false
        state.error = true
      })
  },
})
export default contentSlice.reducer
