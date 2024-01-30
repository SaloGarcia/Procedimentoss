const swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};


const shuffle = (array, swaps) => {
    const length = array.length;
    for (let i = 0; i < swaps; i++) {
        const randomIndex1 = Math.floor(Math.random() * length);
        const randomIndex2 = Math.floor(Math.random() * length);
        swap(array, randomIndex1, randomIndex2);
    }
};


const bubble_sort = (array) => {
    const length = array.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
};


const selection_sort = (array) => {
    const length = array.length;
    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
};


const quick_sort = (array, left, right) => {
    if (left < right) {
        const pivot = partition(array, left, right);
        quick_sort(array, left, pivot - 1);
        quick_sort(array, pivot + 1, right);
    }
};


const partition = (array, left, right) => {
    const pivot = array[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, right);
    return i + 1;
};


function add() {
    const campoValor = document.getElementById("valor");
    const listaValores = document.getElementById("valores");
    const novoElementoLi = document.createElement("li");
    novoElementoLi.textContent = campoValor.value;
    listaValores.appendChild(novoElementoLi);
}


function ordenar() {
    const listaValores = document.getElementById("valores");
    const elementosLi = listaValores.children;

    const valores = Array.from(elementosLi).map(li => parseInt(li.textContent));
    const algoritmo = document.getElementById("algoritmo").value;
    if (algoritmo === "bubble") {
        bubble_sort(valores);
    } else if (algoritmo === "selection") {
        selection_sort(valores);
    } else if (algoritmo === "quick") {
        quick_sort(valores, 0, valores.length - 1);
    }

    const novosItens = valores.map(valor => `<li>${valor}</li>`);
    listaValores.innerHTML = novosItens.join("");
}


function misturar() {
    const listaValores = document.getElementById("valores");
    const elementosLi = listaValores.children;

    
    const valores = Array.from(elementosLi).map(li => parseInt(li.textContent));

    
    shuffle(valores, valores.length * 2); 

   
    const novosItens = valores.map(valor => `<li>${valor}</li>`);

    listaValores.innerHTML = novosItens.join("");
}

