import "./style.css";
const data = {
  tabTotalMontantMensuel: [
    {
      AnneeMois: "octobre-2022",
      MontantTotal: 3200500,
    },
    {
      AnneeMois: "novembre-2022",
      MontantTotal: 6073250,
    },
    {
      AnneeMois: "septembre-2022",
      MontantTotal: 698250,
    },
  ],
  tabMontantTotalParFrais: [
    {
      Code: "DR",
      Libelle: "Droits de r\u00e9inscription",
      MontantTotal: 436500,
    },
    {
      Code: "DI",
      Libelle: "Droits d'inscription",
      MontantTotal: 1210500,
    },
    {
      Code: "OCT",
      Libelle: "Droits d'\u00e9colage mois d'octobre",
      MontantTotal: 6586250,
    },
    {
      Code: "NOV",
      Libelle: "Droits d'\u00e9colage mois de novembre",
      MontantTotal: 1273500,
    },
    {
      Code: "DEC",
      Libelle: "Droits d'\u00e9colage mois de d\u00e9cembre",
      MontantTotal: 116500,
    },
    {
      Code: "JAN",
      Libelle: "Droits d'\u00e9colage mois de janvier",
      MontantTotal: 70500,
    },
    {
      Code: "FEV",
      Libelle: "Droits d'\u00e9colage mois de f\u00e9vrier",
      MontantTotal: 50500,
    },
    {
      Code: "MAR",
      Libelle: "Droits d'\u00e9colage mois de mars",
      MontantTotal: 42500,
    },
    {
      Code: "AVR",
      Libelle: "Droits d'\u00e9colage mois d'avril",
      MontantTotal: 42500,
    },
    {
      Code: "MAI",
      Libelle: "Droits d'\u00e9colage mois de mai",
      MontantTotal: 43500,
    },
    {
      Code: "JUI",
      Libelle: "Droits scolaires mois de juin",
      MontantTotal: 99250,
    },
  ],
  tabMontantTotalParDomaine: [
    {
      Libelle: "Pr\u00e9scolaire",
      MontantTotal: 1583500,
    },
    {
      Libelle: "Primaire",
      MontantTotal: 3388500,
    },
    {
      Libelle: "College",
      MontantTotal: 3131000,
    },
    {
      Libelle: "Lyc\u00e9e",
      MontantTotal: 1869000,
    },
  ],
  tabMontantTotalParFraisPaBranche: [],
  tabMontantTotalParNiveau: [
    {
      Libelle: "Grande Section",
      MontantTotal: 487750,
    },
    {
      Libelle: "Cours Elementaire 1\u00e8re Ann\u00e9e",
      MontantTotal: 513500,
    },
    {
      Libelle: "Cours Elementaire 2\u00e8me  Ann\u00e9e",
      MontantTotal: 633500,
    },
    {
      Libelle: "Cours Moyen 1\u00e8re Ann\u00e9e",
      MontantTotal: 357000,
    },
    {
      Libelle: "Cours Moyen 2\u00e8me  Ann\u00e9e",
      MontantTotal: 672000,
    },
    {
      Libelle: "Sixi\u00e8me",
      MontantTotal: 771500,
    },
    {
      Libelle: "Cinqui\u00e8me",
      MontantTotal: 747000,
    },
    {
      Libelle: "Quatri\u00e8me",
      MontantTotal: 466500,
    },
    {
      Libelle: "Troisi\u00e8me",
      MontantTotal: 1146000,
    },
    {
      Libelle: "Petite Section",
      MontantTotal: 518750,
    },
    {
      Libelle: "Garderie",
      MontantTotal: 171000,
    },
    {
      Libelle: "Moyenne Section",
      MontantTotal: 406000,
    },
    {
      Libelle: "Cours Pr\u00e9paratoire 2\u00e8me Ann\u00e9e",
      MontantTotal: 740500,
    },
    {
      Libelle: "Cours Pr\u00e9paratoire 1\u00e8re Ann\u00e9e",
      MontantTotal: 472000,
    },
    {
      Libelle: "Second",
      MontantTotal: 751500,
    },
    {
      Libelle: "Premi\u00e8re",
      MontantTotal: 558500,
    },
    {
      Libelle: "Terminale",
      MontantTotal: 559000,
    },
  ],
  tabMontantTotalParNiveauDomaine: [
    {
      Libelle: "P1  Pr\u00e9scolaire",
      MontantTotal: 518750,
    },
    {
      Libelle: "CE2 Primaire",
      MontantTotal: 633500,
    },
    {
      Libelle: "6\u00e8me College",
      MontantTotal: 771500,
    },
    {
      Libelle: "4\u00e8me College",
      MontantTotal: 466500,
    },
    {
      Libelle: "CP2 Primaire",
      MontantTotal: 740500,
    },
    {
      Libelle: "3\u00e8me College",
      MontantTotal: 1146000,
    },
    {
      Libelle: "P Lyc\u00e9e",
      MontantTotal: 558500,
    },
    {
      Libelle: "CM2 Primaire",
      MontantTotal: 672000,
    },
    {
      Libelle: "CP1 Primaire",
      MontantTotal: 472000,
    },
    {
      Libelle: "CE1 Primaire",
      MontantTotal: 513500,
    },
    {
      Libelle: "S Lyc\u00e9e",
      MontantTotal: 751500,
    },
    {
      Libelle: "T Lyc\u00e9e",
      MontantTotal: 559000,
    },
    {
      Libelle: "P2  Pr\u00e9scolaire",
      MontantTotal: 406000,
    },
    {
      Libelle: "Gar Pr\u00e9scolaire",
      MontantTotal: 171000,
    },
    {
      Libelle: "5\u00e8me College",
      MontantTotal: 747000,
    },
    {
      Libelle: "CM1 Primaire",
      MontantTotal: 357000,
    },
    {
      Libelle: "P3  Pr\u00e9scolaire",
      MontantTotal: 487750,
    },
  ],
  tabMontantTotalParFraiDomaine: [
    {
      Code: "",
      Libelle: "AVR Pr\u00e9scolaire",
      MontantTotal: 8500,
    },
    {
      Code: "",
      Libelle: "AVR Primaire",
      MontantTotal: 16000,
    },
    {
      Code: "",
      Libelle: "AVR College",
      MontantTotal: 18000,
    },
    {
      Code: "",
      Libelle: "DEC Primaire",
      MontantTotal: 60000,
    },
    {
      Code: "",
      Libelle: "DEC Pr\u00e9scolaire",
      MontantTotal: 8500,
    },
    {
      Code: "",
      Libelle: "DEC College",
      MontantTotal: 33000,
    },
    {
      Code: "",
      Libelle: "DEC Lyc\u00e9e",
      MontantTotal: 15000,
    },
    {
      Code: "",
      Libelle: "DI Pr\u00e9scolaire",
      MontantTotal: 264500,
    },
    {
      Code: "",
      Libelle: "DI Primaire",
      MontantTotal: 392500,
    },
    {
      Code: "",
      Libelle: "DI College",
      MontantTotal: 303500,
    },
    {
      Code: "",
      Libelle: "DI Lyc\u00e9e",
      MontantTotal: 250000,
    },
    {
      Code: "",
      Libelle: "DR Primaire",
      MontantTotal: 189000,
    },
    {
      Code: "",
      Libelle: "DR Lyc\u00e9e",
      MontantTotal: 55000,
    },
    {
      Code: "",
      Libelle: "DR College",
      MontantTotal: 119500,
    },
    {
      Code: "",
      Libelle: "DR Pr\u00e9scolaire",
      MontantTotal: 73000,
    },
    {
      Code: "",
      Libelle: "FEV Pr\u00e9scolaire",
      MontantTotal: 8500,
    },
    {
      Code: "",
      Libelle: "FEV College",
      MontantTotal: 18000,
    },
    {
      Code: "",
      Libelle: "FEV Primaire",
      MontantTotal: 24000,
    },
    {
      Code: "",
      Libelle: "JAN Pr\u00e9scolaire",
      MontantTotal: 8500,
    },
    {
      Code: "",
      Libelle: "JAN College",
      MontantTotal: 18000,
    },
    {
      Code: "",
      Libelle: "JAN Primaire",
      MontantTotal: 44000,
    },
    {
      Code: "",
      Libelle: "JUI Primaire",
      MontantTotal: 13500,
    },
    {
      Code: "",
      Libelle: "JUI Lyc\u00e9e",
      MontantTotal: 22000,
    },
    {
      Code: "",
      Libelle: "JUI Pr\u00e9scolaire",
      MontantTotal: 25250,
    },
    {
      Code: "",
      Libelle: "JUI College",
      MontantTotal: 38500,
    },
    {
      Code: "",
      Libelle: "MAI Pr\u00e9scolaire",
      MontantTotal: 8500,
    },
    {
      Code: "",
      Libelle: "MAI Primaire",
      MontantTotal: 16000,
    },
    {
      Code: "",
      Libelle: "MAI College",
      MontantTotal: 19000,
    },
    {
      Code: "",
      Libelle: "MAR Pr\u00e9scolaire",
      MontantTotal: 8500,
    },
    {
      Code: "",
      Libelle: "MAR College",
      MontantTotal: 18000,
    },
    {
      Code: "",
      Libelle: "MAR Primaire",
      MontantTotal: 16000,
    },
    {
      Code: "",
      Libelle: "NOV College",
      MontantTotal: 434000,
    },
    {
      Code: "",
      Libelle: "NOV Primaire",
      MontantTotal: 432500,
    },
    {
      Code: "",
      Libelle: "NOV Pr\u00e9scolaire",
      MontantTotal: 187000,
    },
    {
      Code: "",
      Libelle: "NOV Lyc\u00e9e",
      MontantTotal: 220000,
    },
    {
      Code: "",
      Libelle: "OCT Primaire",
      MontantTotal: 2185000,
    },
    {
      Code: "",
      Libelle: "OCT College",
      MontantTotal: 2111500,
    },
    {
      Code: "",
      Libelle: "OCT Lyc\u00e9e",
      MontantTotal: 1307000,
    },
    {
      Code: "",
      Libelle: "OCT Pr\u00e9scolaire",
      MontantTotal: 982750,
    },
  ],
  tabMontantTotalParClasse: [],
};

class TableData extends HTMLTableElement {
  connectedCallback(): void {}

  // @ts-ignore
  createRoot(data: [string, any[]][]): HTMLElement[] {}
}

function BindBehaviour(cls: typeof TableData) {
  cls.prototype.connectedCallback = function () {
    this.setAttribute("data", JSON.stringify(data));
    const doc = JSON.parse(this.getAttribute("data")!);
    const fnParse = cls.prototype.createRoot(Object.entries(doc));
    fnParse.forEach((element) => this.appendChild(element));
  };

  cls.prototype.createRoot = function (data) {
    return data.map(([key, value]) => {
      const container = document.createElement("table");
      const thead = document.createElement("thead");
      thead.innerHTML = `<tr><th colspan="2">${key}</th></tr>`;
      container.appendChild(thead);
      const tbody = document.createElement("tbody");
      value.forEach((v) => {
        const row = document.createElement("tr");
        Object.entries(v).forEach(([k, val]) => {
          row.innerHTML += `
            <td>${k} </td>
            <td>${val}</td>
          `;
        });
        tbody.appendChild(row);
      });

      container.appendChild(tbody);
      return container;
    });
  };
}

Array.from([TableData]).forEach(BindBehaviour);
customElements.define("table-element", TableData, {
  extends: "table",
});
