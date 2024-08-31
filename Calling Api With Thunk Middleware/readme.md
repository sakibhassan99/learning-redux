# Calling Api Using Thunk Middleware

so basically here i worked with thunk middleware where i also create a custom thunk middleware
to understand how thunk basically works behind the scene so basically when we dispatch a action
which is a function it's called thunk action creator. In thunk we create a function which performs
the logics in thunks like calling apis, after getting the data then dispatching another action and other logics and we dispatch that thunk action creator and thunk middleware is provided as default
by the redux-toolkit. also we can use default thunk middleware without even using middleware property
in redux store file. and if we need others middlewares then we can use the middleware property in the
store file.