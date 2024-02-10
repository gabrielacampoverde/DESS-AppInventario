(function(window, undefined) {
  var dictionary = {
    "e12ef55f-c629-4883-b3e6-c661ea1ba5eb": "Home_1",
    "b9a095cb-7108-4a70-ab1b-6d4e201a2809": "Escanear QR_1",
    "3aa2da95-2daf-49f8-b2ca-ebf352667170": "Escanear QR_3",
    "39e848aa-f868-48eb-9927-78c1d09bb6cf": "ReporteInv_1",
    "d6aece7f-8bf9-4764-8114-fdd8a36a1de0": "ReporteInv_4",
    "b8ef45a4-1ea4-4f13-b2e6-e719bf121ec8": "Inventario_2",
    "e0f70fff-f111-40a0-994c-f2b4367d6b23": "Escanear QR_1.1",
    "eca306c7-e78e-43bc-a96a-733ce12f7c8c": "Inventario_5",
    "ce033e1e-9b90-4f02-8d3f-6814c7bf40c6": "BuscarActFij_2",
    "6ff82a5b-5571-4f51-bc71-8ac900a5b81a": "BuscarActFij_1",
    "ba4978d3-a9de-46e3-8d65-71db29f005de": "ReporteInv_3",
    "6c66ef97-f8a3-4a33-951c-2895a142fd0e": "Inventario_3",
    "c151f23a-d746-4c3d-a6a2-e8285ab9e78a": "Perfil",
    "53ec5e95-908b-4339-8524-af132177c246": "Escanear QR_2",
    "42fd667a-a210-491e-b69f-d67a7074e672": "ReporteInv_2",
    "97b5c424-f339-426c-bece-f1889b1c8fdd": "Home_2",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Login",
    "e20bf34b-c806-4bd2-8a7a-5038932529f2": "Inventario_1",
    "8adf3871-fea2-43f0-b763-dfadebf3f47c": "Inventario_4",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);