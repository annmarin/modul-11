// Kanban

$(function() {
    
    function randomString() {
        var chars = "0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ";
        var str = "";
        for (i = 0; i < 10; i++) {
            str += chars[Math.floor(Math.random() * chars.lenght)];
        }
        return str;
    };

    board = {
        name: "Kanban Board",
        addColumn: function(column) {
            this.$element.append(column.$element);
            initSortable();
        },
        $element: $("#board .column-container")
    }; // board

    function Column(name) {
        var self = this;

        this.id = randomString();
        this.name = name;
        this.$element = createColumn();

        function createColumn() {
            var $column = $("<div>").addClass("column");
            var $columnTitle = $("<h2>").addClass("column-title").text(self.name);
            var $columnCardList = $("<ul>").addClass("column-card-list");
            var $columnDelete = $("<button>").addClass("btn-delete-column").text("X"); 
            var $columnAddCard = $("<button>").addClass("add-card").text("Add a card");

            $columnDelete.click(function() {
                self.removeColumn();    
            });

            $columnAddCard.click(function() {   
                self.addCard(new Card(prompt("Enter a name of a new card.")));
            });

            $column.append($columnTitle)
                .append($columnAddCard)
                .append($columnDelete)
                .append($columnCardList);

            return $column;    
        }; // createColumn
    }; // Column(name)

    Column.prototype = { 
        addCard: function(card) {
            this.$element.children("ul").append(card.$element);
        },
        removeColumn: function() {
            this.$element.remove();
        }
    };
    
    function Card(description) {
        var self = this;

        this.id = randomString();
        this.description = description;
        this.$element = createCard();

        function createCard() {
            var $card = $("<li>").addClass("card");
            var $cardDescription = $("<p>").addClass("card-description").text(self.description);
            var $cardDelete = $("<button>").addClass("btn-delete-card").text("X");

            $cardDelete.click(function() {
                self.removeCard();
            });

            $card.append($cardDelete)
                .append($cardDescription);

            return $card;
        }; //createCard
    }; // Card(description)

    Card.prototype = {
        removeCard: function() {
            this.$element.remove();
        }
    };      
        
    function initSortable() {
        $(".column-card-list").sortable({
            connectWith: ".column-card-list",
            placeholder: "card-placeholder"
        }).disableSelection();
    };

    $(".create-column").click(function() {
        var name = prompt("Enter a new column name.");
        var column = new Column(name);

        board.addColumn(column);
    });

    var todoColumn = new Column("To do");
    var doingColumn = new Column("Doing");
    var doneColumn = new Column("Done");
    var homeTasks = new Column("Home tasks");

    board.addColumn(todoColumn);
    board.addColumn(doingColumn);
    board.addColumn(doneColumn);
    board.addColumn(homeTasks);

    var card1 = new Card("layout nr 1");
    var card2 = new Card("kanban board");
    var card3 = new Card("gift for Ola");
    var card4 = new Card("portfolio")
    
    todoColumn.addCard(card4);
    doingColumn.addCard(card1);
    doneColumn.addCard(card2);
    homeTasks.addCard(card3);

}); // jQuery (DOM)