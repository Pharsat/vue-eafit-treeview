# Introdución

El componente de eafit-tree-view, es una vista de árbol que permite una representación jerárquica de información, compuesto por un nodo o rama que contiene subcarpetas que a su vez contienen archivos, desarrollado en vue.js.

Este treeview cuenta con las siguientes especificaciones: 

1. Solo permite la creación de un nodo o rama principal.
2. Mediante un menú contextual y usando de clic derecho sobre el nodo puede adicionar subcarpetas o eliminar toda la rama.
3. Las subcarpetas al igual que los notos contiene un menú contextual en el cual puede agregar un archivo o eliminar la subcarpeta.
4. Los archivos se pueden eliminar (clic derecho), se puede modificar su contenido (clic derecho) y ver su contenido (doble clic).

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
```javascript
<script>
...
import "eafit-tree-view";
...
</script>
```
Estilos:
```css
<style [scope]>
...
@import url("../../node_modules/eafit-tree-view/dist/tree-view.css");
...
</style>
```
