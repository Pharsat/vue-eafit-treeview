# Introdución

El componente de eafit-tree-view, es una vista de árbol que permite una representación jerárquica de información, compuesto por un nodo o rama que contiene subcarpetas que a su vez contienen archivos, desarrollado en vue.js.

Este treeview cuenta con las siguientes especificaciones: 

1. Solo permite la creación de un nodo o rama principal.
2. Mediante un menú contextual y usando de clic derecho sobre el nodo puede adicionar subcarpetas o eliminar toda la rama y mediante doble clic observar su contenido.
3. Las subcarpetas al igual que los nodos contiene un menú contextual (clic derecho) en el cual puede agregar un archivo o eliminar la subcarpeta y observar su contenido con doble clic.
4. Los archivos se pueden eliminar o modificar su contenido mediante menú contextual (clic derecho) y ver su contenido con doble clic.

A medida que elimina, crea o modifica los elementos estos cambios se van almacenando en el local store en formato JSON.


Formato del arbol json almacenado:
```vue
[
   {
      "id":1,                      // identificador del nodo
      "name":"Root",               // nombre del nodo
      "subFolders":[               //Subfolder asociados 
         {
            "id":"1_1",             //identificador del subfolder (1 digito indica el id del nodo al cual esta asociado,2 digito identifica al folder)   
            "name":"Subfolder",    // nombre del folder 
            "files":[               //archivos asociados al subfolder
               {
                  "id":"1_1_1",     // identificador del archivo  (1 digito indica el id del nodo al cual esta asociado,2 digito indica el id del subfolder al cual esta asociado, 3 digito identificador del archivo)
                  "name":"File",    //nombre del archivo 
                  "text":""         //contenido del archivo 
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
# Configuracion

## Adiccionar carpetas dentro de carpetas

Por defecto el componente no permite la creacion de carpetas dentro de carpetas, para tener control sobre esto, debe configurar el componente asi:

```vue
...
<TreeView allowSubFoldersIntoSubFoldersAddition="[true/false]" />
...
```

## Configurar los estilos


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
## Ejemplo de implementación

![Alt text](https://github.com/Pharsat/vue-eafit-treeview/blob/master/ejemplo.PNG)

## Ejemplo JSON generado
```json
[
   {
      "id":1,
      "name":"Root",
      "subFolders":[
         {
            "id":"1_1",
            "name":"Subfolder",
            "files":[
               {
                  "id":"1_1_1",
                  "name":"File1",
                  "text":"TODO LO QUE SE PUEDE IMAGINAR ES REAL\n"
               },
               {
                  "id":"1_1_2",
                  "name":"File2",
                  "text":"¿Hasta qué punto lo que imaginamos es menos real que lo que percibimos a través de los sentidos?\n"
               }
            ]
         }
      ]
   }
]
```
