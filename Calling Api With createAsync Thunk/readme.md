# Calling Api Using createAsyncThunk

so basically here i worked with thunk middleware nut i used the createAsyncThunk function this
function works exact same like custom thunk middleware but provide some extra functionality like
it takes action creator name as first argument and take a callback function as second argument
where we can fetch data also we can use that cb function as async function where we have to return
the res json which basically return a promise and we have to use extraReducers to use that
createAsyncThunk where we have to add the extraReducers in createSlice and use that with the builder
cb function where we can add different cases in builder by using builder.addCase it took first 
argument the promise status which was created by createAsyncThunk and second argument a cb function
where we receive state action and perform whatever we want as per the promise status