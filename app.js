(function() {

    var form = {
        tab1: {
            label: 'Первый таб',
            children: [
                 {                    
                    type: 'input',
                    kind: 'text',
                    label: 'Name',
                    name: 'Text'
                },
                {                    
                    type: 'input',
                    kind: 'checkbox',
                    label: 'Name',
                    name: 'Checkbox'
                },
                {                    
                    type: 'input',
                    kind: 'radio',
                    label: 'Name',
                    name: 'Radio'
                },
            ]
        }
    }


    var draggableElements = document.getElementsByName('draggable')[0];
    var dropZone = document.getElementById('dropZone');
    var container = document.getElementById('container');

    dropZone.addEventListener('dragenter', function(e) {
        e.preventDefault();
        return true;
    });

    dropZone.addEventListener('dragover', function(e) {
        e.preventDefault();
    });

    dropZone.addEventListener('drop', function(e) {
        var data = e.dataTransfer.getData("Id");
        e.target.appendChild(document.getElementById(data));
        e.stopPropagation();
        return false;
    });

    render(form.tab1.children);

    function render(elementsArray) {
        var elementsString = '';
        for (var i = 0; i < elementsArray.length; i++) {
            var item = elementsArray[i];
            elementsString = elementsString + 
                '<div id="' + i + '" draggable="true">'
                    + '<label>' + item.label + '</label>'
                    + '<' + item.type + ' type=' + item.kind + ' name=' + item.name + '/>' + 
                '</div>';
        }
        container.innerHTML = elementsString;
        for (var i = 0; i < elementsArray.length; i++) {
            document.getElementById(i).addEventListener('dragstart', function(e) {
                e.dataTransfer.effectAlloved = 'copy';
                e.dataTransfer.setData('Id', e.target.getAttribute('id'));
                return true;
            });
            document.getElementById(i).addEventListener('drop', function(e) {
                //e.preventDefault();
                e.stopPropagation();
            });
        }
    }

    /*function _setListeners(elements) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('dragstart', function(e) {
                e.dataTransfer.effectAlloved = 'copy';
                e.dataTransfer.setData('Text', e.target.getAttribute('id'));
                return true;
            });
        }
    }*/

})();