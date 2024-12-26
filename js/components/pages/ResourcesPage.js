export default {
    template: /*html*/ `
        <div class="min-h-screen pt-32 px-[5%]">
            <section class="max-w-7xl mx-auto">
                <h1 class="text-5xl font-bold mb-6">Documentation</h1>
                <p class="text-xl text-gray-400 mb-12">Documentation de l'exercice 2.</p>

                <a href="https://cmontmorency365-my.sharepoint.com/:w:/g/personal/2396602_cmontmorency_qc_ca/EY6cXO_0CJ1FsppxdDyCTPMBxfKi-4bJ7rI-Ww_920FxMA?e=1Z3uME">
                    <button class="px-10 py-3 rounded-lg text-sm font-medium bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 mb-10">
                        Document Word
                    </button>
                </a>

                <div class="mb-16 border border-white/10 rounded-2xl p-6">
                    <div id="documentation-accordion">
                        <h3 class="text-xl font-semibold cursor-pointer">Arrow functions</h3>
                        <div>
                            <p class="text-gray-400 mb-4">
                            Arrow functions provide a more concise syntax for defining functions in JavaScript, compared to traditional function declarations and expressions.
                            </p>

                            <p class="text-gray-400 mb-4"> Syntaxe de base : <span class="bg-dark-lighter pl-2 pr-2 font-mono text-sm overflow-x-auto mb-4">() => {}</span> <br>
                            <span class="bg-dark-lighter pl-2 pr-2 font-mono text-sm overflow-x-auto mb-4">()</span> représente les paramètres (vides si aucun paramètre). <br>
                            <span class="bg-dark-lighter pl-2 pr-2 font-mono text-sm overflow-x-auto mb-4">=></span> est l'opérateur "flèche". <br>
                            <span class="bg-dark-lighter pl-2 pr-2 font-mono text-sm overflow-x-auto mb-4">{...}</span> contient le corps de la fonction. <br>
                            </p>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-javascript">
const saluer = () => console.log("Bonjour !");
                                </code></pre>
                            </div>
                            <p class="text-gray-400 mb-4">
                                Cette fonction, lorsqu'elle est appelée (saluer()), affiche "Bonjour !" dans la console.
                            </p>
                            <hr class="border-white/10 mb-4">
                            <p class="text-gray-400 mb-4">
                            Les fonctions fléchées gèrent les paramètres de manière flexible :
                            </p>
                            <p class="text-gray-400 mb-4">
                            Aucun paramètre : <span class="bg-dark-lighter pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">() => { ... }</span>
                            </p>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-javascript">
const messageVide = () => console.log("Aucun message");
                                </code></pre>
                            </div>
                            <p class="text-gray-400 mb-4">
                                Un seul paramètre : <span class="bg-dark-lighter pl-2 pr-2 font-mono text-sm overflow-x-auto mb-4">param => { ... }</span> (Les parenthèses sont optionnelles dans ce cas.)
                            </p>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-javascript">
const doubler = x => x * 2; /*(équivalent à)*/ (x) => x * 2;
                                </code></pre>
                            </div>
                            <p class="text-gray-400 mb-4">
                            Plusieurs paramètres : <span class="bg-dark-lighter pl-2 pr-2 font-mono text-sm overflow-x-auto mb-4">(p1, p2) => { ... }</span> (Les parenthèses sont obligatoires.)
                            </p>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-javascript">
const additionner = (a, b) => a + b;
                                </code></pre>
                            </div>
                            <p class="text-gray-400 mb-4">
                                Corps concis (expression unique) : Si le corps de la fonction ne contient qu'une
                                seule expression, le mot-clé return peut être omis. On parle alors de retour implicite.
                            </p>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-javascript">
const carré = x => x * x;
const carré = x => { return x * x; };

// Les deux expressions sont équivalentes.

</code></pre>
                            </div>
                            <p class="text-gray-400 mt-6 mb-4">
                                Retour d'un objet littéral : Pour retourner un objet littéral avec un corps concis, il
                                est obligatoire d'encapsuler l'objet entre parenthèses afin d'éviter toute ambiguïté
                                avec les accolades du corps de la fonction.
                            </p>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-javascript">
const créerObjet = valeur => ({ clé: valeur });
                            </code></pre>
                            </div>
                            <p class="text-gray-400 mt-6 mb-4">
                                Une différence cruciale entre les fonctions fléchées et les fonctions
                                traditionnelles réside dans la gestion du mot-clé this.
                            </p>
                            <p class="text-gray-400 mb-4">
                                Dans les fonctions fléchées, this est lexical, ce qui signifie qu'il hérite de la
                                valeur de this de la portée englobante (le contexte dans lequel la fonction
                                fléchée est définie).
                            </p>
                            <p class="text-gray-400 mb-4">
                                Cela résout les problèmes courants de liaison de this rencontrés dans les
                                rappels (callbacks), les gestionnaires d'événements et les méthodes d'objet
                                imbriquées, où la valeur de this pouvait être inattendue avec les fonctions
                                traditionnelles.
                            </p>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-javascript">
const obj = {
    valeur: 10,
    afficher: () => console.log(this.valeur) // this réfère à l'objet obj
};
obj.afficher(); // Affiche 10

</code></pre>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold cursor-pointer">Manipulate arrays</h3>
                        <div>
                            <p class="text-gray-400 mb-4">
                                La méthode map() crée un nouveau tableau en appliquant une fonction à chaque
                                élément du tableau d'origine.
                            </p>
                            <p class="text-gray-400 mb-4">
                                Elle ne modifie pas le tableau original.
                            </p>
                            <p class="text-gray-400 mb-4">
                                Syntaxe : tableau.map(fonction(élément, index, tableauOriginal))
                            </p>
                            <ul class="list-disc pl-6 text-gray-400 mb-4">
                                <li>élément : L'élément courant.</li>
                                <li>index (optionnel) : L'index de l'élément courant.</li>
                                <li>tableauOriginal (optionnel) : Le tableau d'origine.</li>
                            </ul>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-javascript">
const nombres = [1, 2, 3];
const nombresDoubles = nombres.map(nombre => nombre * 2);
console.log(nombresDoubles); // Affiche [2, 4, 6]

</code></pre>
                            </div>

                            <p class="text-gray-400 mt-6 mb-4">
                                La méthode filter() crée un nouveau tableau contenant uniquement les éléments qui
                                passent un test (une condition) fourni sous forme de fonction.
                            </p>
                            <p class="text-gray-400 mb-4">
                                Elle ne modifie pas le tableau original.
                            </p>
                            <p class="text-gray-400 mb-4">
                                Syntaxe : tableau.filter(fonction(élément, index, tableauOriginal))
                                La fonction doit retourner true pour conserver l'élément, false sinon.
                            </p>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-javascript">
const nombres = [1, 2, 3, 4, 5];
const nombresPairs = nombres.filter(nombre => nombre % 2 === 0);
console.log(nombresPairs); // Affiche [2, 4]

</code></pre>
                            </div>

                            <p class="text-gray-400 mt-6 mb-4">
                                La méthode reduce() applique une fonction (appelée "réducteur") sur un accumulateur et
                                chaque élément du tableau (de gauche à droite) afin de réduire le tableau à une seule
                                valeur.
                            </p>
                            <p class="text-gray-400 mb-4">
                                Syntaxe : tableau.reduce(fonction(accumulateur, élément, index, tableauOriginal),
                                valeurInitiale)
                            </p>
                            <ul class="list-disc pl-6 text-gray-400 mb-4">
                                <li>accumulateur : La valeur accumulée.</li>
                                <li>valeurInitiale (optionnel) : La valeur initiale de l'accumulateur. Si non fournie, le premier
                                    élément du tableau est utilisé comme valeur initiale et l'itération commence au deuxième
                                    élément.</li>
                            </ul>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-javascript">
const nombres = [1, 2, 3, 4];
const somme = nombres.reduce((accumulateur, nombre) => accumulateur + nombre, 0);
console.log(somme); // Affiche 10

</code></pre>
                            </div>

                            <p class="text-gray-400 mt-6 mb-4">
                                Il est courant et très efficace de chaîner les méthodes map(), filter() et reduce() pour
                                effectuer des transformations complexes sur les tableaux en une seule ligne de code.
                            </p>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-javascript">
const etudiants = [ /* ... tableau d'objets étudiants ... */ ];
const nomsEtudiantsRecus = etudiants
    .filter(etudiant => etudiant.note > 75)
    .map(etudiant => etudiant.nom);
console.log(nomsEtudiantsRecus); // Affiche les noms des étudiants ayant une note > 75

</code></pre>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold cursor-pointer">Destructuring</h3>
                        <div>
                            <p class="text-gray-400 mb-4">
                                Le destructuring est une fonctionnalité puissante d'ES6 (ECMAScript 2015) qui permet
                                d'extraire facilement des valeurs d'objets et de tableaux.
                            </p>
                            <p class="text-gray-400 mb-4">
                                Il offre une syntaxe concise et lisible pour affecter des valeurs à des variables.
                            </p>
                            <p class="text-gray-400 mb-4">
                                Cette technique simplifie l'accès aux données imbriquées et améliore la clarté du code.
                            </p>

                            <p class="text-gray-400 mt-6 mb-4">
                                Le destructuring d'objet utilise la syntaxe suivante : const { propriété1, propriété2 } = objet;
                            </p>
                            <p class="text-gray-400 mb-4">
                                Les noms des propriétés entre accolades doivent correspondre aux noms des propriétés de
                                l'objet.
                            </p>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-javascript">
const etudiant = { nom: 'Alice', age: 25, note: 80 };
const { nom, note } = etudiant;
console.log(nom);  // Affiche 'Alice'
console.log(note); // Affiche 80

</code></pre>
                            </div>

                            <p class="text-gray-400 mt-6 mb-4">
                                On peut aussi utiliser un nom de variable différent du nom de la propriété :
                            </p>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-javascript">
const { nom: nomEtudiant } = etudiant;

</code></pre>
                            </div>

                            <p class="text-gray-400 mt-6 mb-4">
                                Le destructuring de tableau utilise la syntaxe suivante : const [element1, element2] = tableau;
                            </p>
                            <p class="text-gray-400 mb-4">
                                L'ordre des variables entre crochets correspond à l'ordre des éléments dans le tableau.
                            </p>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-javascript">
const nombres = [1, 2, 3, 4, 5];
const [premier, deuxieme] = nombres;
console.log(premier);  // Affiche 1
console.log(deuxieme); // Affiche 2

</code></pre>
                            </div>

                            <p class="text-gray-400 mt-6 mb-4">
                                On peut ignorer des éléments avec une virgule :
                            </p>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-javascript">
const [premier, , troisieme] = nombres;

</code></pre>
                            </div>

                            <p class="text-gray-400 mt-6 mb-4">
                                Destructuring imbriqué : On peut destructurer des objets et des tableaux imbriqués :
                            </p>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-javascript">
const utilisateur = {
    adresse: { ville: 'Montréal', codePostal: 'H2X 1Y8' }
};
const { adresse: { ville } } = utilisateur;
console.log(ville); // Affiche 'Montréal'

</code></pre>
                            </div>

                            <p class="text-gray-400 mt-6 mb-4">
                                Destructuring dans les paramètres de fonctions : Très pratique pour simplifier l'accès
                                aux propriétés d'un objet passé en argument :
                            </p>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-javascript">
function afficherInfos({ nom, age }) {
    console.log('Nom: ' + nom + ', Âge: ' + age);
}
const personne = { nom: 'Bob', age: 30 };
afficherInfos(personne);
</code></pre>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold cursor-pointer">Spread operator</h3>
                        <div>
                            <p class="text-gray-400 mb-4">
                                Le spread operator (...) permet d'étaler les éléments d'un itérable (comme un tableau, une
                                chaîne de caractères ou un objet itérable) dans un nouvel tableau, un nouvel objet ou une
                                liste d'arguments de fonction.
                            </p>

                            <p class="text-gray-400 mt-6 mb-4">
                                Dans les tableaux : Créer une copie ou concaténer des tableaux.
                            </p>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-javascript">
const original = [1, 2, 3];
const copie = [...original, 4, 5]; // [1, 2, 3, 4, 5]
const concatene = [0, ...original, 6]; // [0, 1, 2, 3, 6]

</code></pre>
                            </div>

                            <p class="text-gray-400 mt-6 mb-4">
                                Dans les objets : Créer une copie ou fusionner des objets.
                            </p>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-javascript">
const user = { nom: 'toto', age: 17 };
const extendedUser = { id: 1, ...user }; // { id: 1, nom: 'toto', age: 17 }

</code></pre>
                            </div>

                            <p class="text-gray-400 mt-6 mb-4">
                                Le spread operator peut ��tre utilisé pour passer les éléments d'un tableau comme
                                arguments à une fonction.
                            </p>
                            <p class="text-gray-400 mb-4">
                                Cela est utile lorsque vous avez un tableau d'arguments et que la fonction attend des
                                arguments individuels.
                            </p>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-javascript">
function additionner(a, b, c) {
    return a + b + c;
}
const nombres = [1, 2, 3];
const somme = additionner(...nombres); // Équivalent à additionner(1, 2, 3)
console.log(somme); // Affiche 6

</code></pre>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold cursor-pointer">Rest operator</h3>
                        <div>
                            <p class="text-gray-400 mb-4">
                                Les paramètres rest (...) permettent de représenter un nombre indéfini d'arguments sous
                                forme de tableau dans une fonction.
                            </p>
                            <p class="text-gray-400 mb-4">
                                Ils doivent être le dernier paramètre de la fonction.
                            </p>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-javascript">
function afficherNombres(premier, ...reste) {
    console.log("Premier :", premier);
    console.log("Reste :", reste);
}
afficherNombres(1, 2, 3, 4, 5);
// Affiche :
// Premier : 1
// Reste : [2, 3, 4, 5]

</code></pre>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold cursor-pointer">BEM (Block Element Modifier)</h3>
                        <div>
                            <p class="text-gray-400 mb-4">
                                BEM (Block Element Modifier) est une convention de nommage CSS qui vise à améliorer
                                l'organisation, la lisibilité et la maintenabilité du code CSS.
                            </p>
                            <p class="text-gray-400 mb-4">
                                Elle encourage la création de composants réutilisables et indépendants.
                            </p>
                            <p class="text-gray-400 mb-4">
                                BEM divise le style en trois entités : Block, Element et Modifier.
                            </p>

                            <p class="text-gray-400 mt-6 font-semibold">Block (Bloc) : Le composant principal</p>
                            <ul class="list-disc pl-6 text-gray-400 mb-4 space-y-2">
                                <li>Un Block représente un composant indépendant et réutilisable sur une page.</li>
                                <li>Il encapsule une portion de l'interface utilisateur qui a un sens propre.</li>
                                <li>Le nom d'un Block doit décrire son but, pas son apparence.</li>
                                <li>Nommage : un seul mot, en minuscules, ou plusieurs mots séparés par des tirets (-).</li>
                            </ul>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-css">
/* Exemples de Blocks */
.bouton { }
.formulaire { }
.menu { }

</code></pre>
                            </div>

                            <p class="text-gray-400 mt-6 font-semibold">Element (Élément) : Partie d'un bloc</p>
                            <ul class="list-disc pl-6 text-gray-400 mb-4 space-y-2">
                                <li>Un Element est une partie constitutive d'un Block. Il ne peut pas être utilisé de manière
                                    indépendante du Block auquel il appartient.</li>
                                <li>Il décrit une partie spécifique du Block.</li>
                                <li>L'élément est toujours dépendant de son bloc parent.</li>
                                <li>Nommage : nomDuBlock__nomDeLElement (double underscore __).</li>
                            </ul>
                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-css">
/* Exemples d'Elements */
.bouton__texte { }
.formulaire__champ { }
.menu__item { }

</code></pre>
                            </div>


                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-css">
/* Block */
.card { }

/* Element */
.card__title { }
.card__image { }

/* Modifier */
.card--featured { }
.card__title--large { }

</code></pre>
                            </div>

                            <p class="text-gray-400 mt-6 font-semibold">Modifier (Modificateur) : Variante d'un bloc ou d'un élément</p>
                            <ul class="list-disc pl-6 text-gray-400 mb-4 space-y-2">
                                <li>Un Modifier définit une variante ou une extension d'un Block ou d'un Element.</li>
                                <li>Il modifie l'apparence, le comportement ou l'état du Block ou de l'Element.</li>
                            </ul>

                            <p class="text-gray-400 mb-2">Nommage :</p>
                            <ul class="list-disc pl-10 text-gray-400 mb-4">
                                <li>Pour un Block : nomDuBlock--nomDuModificateur (double tiret --)</li>
                                <li>Pour un Element : nomDuBlock__nomDeLElement--nomDuModificateur</li>
                            </ul>

                            <div class="bg-dark-lighter rounded-lg pl-4 pr-2 font-mono text-sm overflow-x-auto mb-4">
                                <pre><code class="language-css">
/* Exemples de Modifiers */
.bouton--grand { }
.bouton--desactive { }
.bouton__texte--important { }

</code></pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `,
    mounted() {
        $("#documentation-accordion").accordion({
            heightStyle: "content",
            collapsible: true,
            active: false,
            animate: {
                duration: 150,
                easing: 'linear'
            },
            header: "> h3"
        });

        // Initialize Prism.js highlighting
        Prism.highlightAll();
    },
    unmounted() {
        $("#documentation-accordion").accordion("destroy");
    }
}