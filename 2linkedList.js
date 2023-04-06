/* Написать класс, реализующий двусвязный список. Предусмотреть методы
поиска, вставки, удаления, изменения элемента и определения длины списка.
*/
/*Двусвязный список - это структура связанных данных, которая состоит из набора последовательно-связанных записей, называемых узлами. Каждый узел содержит два поля, называемые ссылками, которые являются ссылками на предыдущий (previous) и последующий (next) узел.
*/

// Это узел двусвязного списка
class TwoLinkedListNode {
    // value - содержит значение, которое должен хранить элемент связанного списка
    // next - указатель на следующий элемент в списке
    // previous - указатель на предыдущий элемент в списке
    
      constructor(value, next = null, previous = null) {
        this.value = value;
        this.next = next;
        this.previous = previous;
      }
    }
    
    // Двусвязный список
    class TwoLinkedList {
      constructor() {
        this.head = null;
        this.tail = null;
      }
      // вставка узла 
      append(value) { 
        const newNode = new TwoLinkedListNode(value);
        if (this.tail) {
        // Присоединяем новый узел к концу связного списка.
        this.tail.next = newNode;
        }
    
      // В новом узле указываем ссылку на предыдущий (previous) элемент на this.tail,
      // так как новый узел будет теперь последним.
      newNode.previous = this.tail;
    
      // Переназначаем tail на новый узел.
      this.tail = newNode;
    
      // Если ещё нет head, делаем новый узел head.
      if (!this.head) {
        this.head = newNode;
      }
    
      return this;
      }
    
    delete(value) {
      // Если нет head значит список пуст.
      if (!this.head) {
        return null;
      }
    
      let deletedNode = null;
      let currentNode = this.head;
    
      // Перебираем все узлы и удаляем их, если их значение равно указанному.
      while (currentNode) {
        if (currentNode.value === value) {
          // Сохраняем значение текущего узла как удаленное.
          deletedNode = currentNode;
    
          // Если head должен быть удален,
          if (deletedNode === this.head) {
            // то делаем следующий узел новым head
            this.head = deletedNode.next;
    
            // Меняем в новом head ссылку (previous) на null.
            if (this.head) {
              this.head.previous = null;
            }
    
            // Если все узлы в списке имеют одинаковое значение,
            // которое передается в качестве аргумента,
            // тогда все узлы будут удалены. Поэтому tail необходимо обновить.
            if (deletedNode === this.tail) {
              this.tail = null;
            }
          } else if (deletedNode === this.tail) {
            // Если tail должен быть удален, -
            // меняем tail на предпоследний узел, который станет новым хвостом.
            this.tail = deletedNode.previous;
            // Обновляем ссылку next в новом хвосте.
            this.tail.next = null;
          } else {
            // Если средний узел будет удален, -
            // сохраняем ссылку на предыдущий элемент,
            const previousNode = deletedNode.previous;
            // и сохраняем ссылку на следующий элемент.
            const nextNode = deletedNode.next;
            // Меняем ссылки у предыдущего и следующего узлов от удаленного узла,
            // чтобы они больше не ссылались на удаленный узел.
            previousNode.next = nextNode;
            nextNode.previous = previousNode;
          }
        }
    
        // Перематываем на один узел вперёд.
        currentNode = currentNode.next;
      }
    
      return deletedNode;
    }
    // поиск
    find(value) {
      // Если нет head - список пуст.
      if (!this.head) {
        return null;
      }
    
      let currentNode = this.head;
    
      // Перебираем все узлы в поиске значения.
      while (currentNode) {
        // Если указано значение, пробуем сравнить его по значению.
        if (value !== undefined && currentNode.value === value) {
          return currentNode;
        }
    
        // Перематываем на один узел вперед.
        currentNode = currentNode.next;
      }
    
      return null; 
    }
    
    // изменение элемента
    change(value_old, value_new) {
    
    let old_node = this.find(value_old);
    if (old_node) {
    // заменяем заголовок и знaчение
    old_node.head = value_new;
    old_node.value = value_new;
    return old_node;
    }
    }
    
    // определение длины списка
    getLenghtList() {
    let lenght = 0;
    let currentNode = this.head;
      // Перебираем все узлы и прибавляем в длину
      while (currentNode) {
        ++lenght;
        currentNode = currentNode.next;
      }
      return lenght;
    }
    }
    
    let rr = new TwoLinkedList();
    rr.append(1);
    rr.append(2);
    rr.append(3);
    rr.append(4);
    rr.append(5);
    rr.change(2,22);