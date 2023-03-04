const HOST = process.env.NODE_ENV === "development" 
? process.env.REACT_APP_API_DEV_MODE 
: process.env.REACT_APP_API_PRO_MODE

export {
  HOST
}
