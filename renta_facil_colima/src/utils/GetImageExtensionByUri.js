const GetImageExtensionByUri = uri => {
  const uriArray = uri.split('.');
  const extension = uriArray[uriArray.length - 1];
  return extension;
};

export default GetImageExtensionByUri;
