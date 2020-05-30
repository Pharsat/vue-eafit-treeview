# Introdución

El componente de eafit-tree-view, es una vista de árbol que permite una representación jerárquica de información, compuesto por un nodo o rama que contiene subcarpetas que a su vez contienen archivos, desarrollado en vue.js.

Este treeview cuenta con las siguientes especificaciones: 

1. Solo permite la creación de un nodo o rama principal.
2. Mediante un menú contextual y usando de clic derecho sobre el nodo puede adicionar subcarpetas o eliminar toda la rama y mediante clic derecho observa su contenido.
3. Las subcarpetas al igual que los nodos contiene un menú contextual (clic derecho) en el cual puede agregar un archivo o eliminar la subcarpeta y observar su contenido con clic derecho.
4. Los archivos se pueden eliminar o modificar su contenido mediante menú contextual (clic derecho) y ver su contenido con doble clic.

A medida que elimina, crea o modifica los elementos estos cambios se van almacenando en el local store en formato JSON.


Formato del arbol json almacenado:
```json
[
   {
      "id":1,
      "name":"Root",
      "subFolders":[
         {
            "id":"1_1",
            "name":"Sub folder",
            "files":[
               {
                  "id":"1_1_1",
                  "name":"File",
                  "text":""
               }
            ]
         }
      ]
   }
]
```
# Instalación

## NPM
NPM es el método de instalación recomendado para usar eafit-tree-view.

```console
npm install eafit-tree-view
```
# Uso

Sobre el componente donde usara TreeView importe las siguiente librerias:

Componente:
```vue
<script>
...
import "eafit-tree-view";
...
</script>
```
Estilos:
```vue
<style [scope]>
...
@import url("../../node_modules/eafit-tree-view/dist/tree-view.css");
...
</style>
```

# Ejemplo de uso de TreeView en un componente Vue
```vue
<template>
  <div class="hello">
    <div style="width:500px;margin-left:auto;margin-right:auto;">
      <TreeView />
    </div>
  </div>
</template>

<script>
import "eafit-tree-view";
export default {
  name: "HelloWorld"
};
</script>

<style>
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../../node_modules/eafit-tree-view/dist/tree-view.css");
</style>
```

