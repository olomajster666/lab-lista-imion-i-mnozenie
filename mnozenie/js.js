      function generateMultiplicationTable() {
        // pobierz element HTML, do którego wypiszemy tabliczkę mnożenia
        const outputDiv = document.getElementById('t');

        // utwórz tablicę dwuwymiarową 10x10, wypełnioną zerami
        const table = new Array(10).fill(0).map(() => new Array(10).fill(0));

        // wypełnij tablicę wartościami wyników mnożenia
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 10; j++) {
            table[i][j] = (i + 1) * (j + 1);
          }
        }

        // utwórz tabelę HTML i wypełnij ją wartościami z tablicy mnożenia
        const tableHtml = '<table style="border: 1px solid black;">' + table.map(row => '<tr style="border: 1px solid black;">' + row.map(cell => '<td style="border: 1px solid black;">' + cell + '</td>').join('') + '</tr>').join('') + '</table>';

        // wyświetl tabelę HTML w elemencie HTML
        outputDiv.innerHTML = tableHtml;
      }

	generateMultiplicationTable()