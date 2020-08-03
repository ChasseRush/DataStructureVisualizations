"use-es6";

import React, { Component } from "react";
import { Header, Container } from "semantic-ui-react";
import { ReactComponent as LinkedListExample } from "../svgs/LinkedList/linkedlist.svg";
import LinkedListAddToFront from "../Components/LinkedListAddToFront";
import LinkedListAddToBack from "../Components/LinkedListAddToBack";
import LinkedListRemoveFromFront from "../Components/LinkedListRemoveFromFront";
import LinkedListRemoveFromBack from "../Components/LinkedListRemoveFromBack";
import { linkedListBigOInfo } from "../Constants/TableConstants";
import BigOTable from "../Components/BigOTable";

class LinkedListContainer extends Component {
  render() {
    return (
      <div>
        <Header as="h2" textAlign="center" style={{ paddingTop: 32 }}>
          Intro to LinkedLists
        </Header>
        <Container className="text-container">
          <Header as="h3">What is a LinkedList?</Header>
          <p>
            LinkedLists are lists of nodes (or objects) that contain data along
            with pointers to other nodes. A node can be considered a basic
            object that is part of some data strucutre, like a linked list. A
            pointer is a reference to another node, and in the case of
            LinkedLists, it's a reference to the node that comes after it. The
            last node in the list will simply point to null as it does not have
            any nodes after it.
          </p>
          <Header as="h3">What goes into making a LinkedList</Header>
          <p>
            As mentioned earlier, LinkedLists are just a list of Nodes or
            objects. So, a LinkedList is just made up of a reference to the
            first node in the list, called the <strong>head</strong>, and the
            head points to the node after it, which points to the node after it,
            and so on. LinkedLists may also contain a <strong>tail</strong>,
            which is a reference to the last node in the list. This will make it
            much more efficient to add new nodes to the end of the list, which
            we'll see later. A LinkedList contains a <strong>size</strong>{" "}
            variable as well that just stores the number of nodes in the
            LinkedList. Take a look at the visual below.
          </p>
          <LinkedListExample style={{ width: "80%" }} />
          <p style={{ paddingTop: 32 }}>
            As you can see, the head of the LinkedList is the first node in the
            list (A), and each node points to the node that comes after it. The
            last node in the list points to a null value, representing the end
            of the list. Using just the head of the list, the LinkedList can
            access any value in the list. However, there are multiple kinds of
            LinkedLists.
          </p>
          <Header as="h3">What are the different kinds of LinkedLists</Header>
          <p>
            There are multiple different forms of LinkedLists, but we'll focus
            on two: <strong>Singly LinkedLists (SLL)</strong> and{" "}
            <strong>Doubly LinkedLists (DLL)</strong>. A{" "}
            <strong>Singly LinkedList</strong> is simply just a LinkedList that
            contains nodes that have pointers to the next node in the list, aka
            next variables. <strong>Doubly LinkedLists</strong>, however, have
            nodes that have pointers to both the next node in the list and the
            previous node in the list, meaning each node has a <code>next</code>{" "}
            variable and a <code>previous</code> variable.
          </p>
          <p>
            The example above is a perfect example of a Singly LinkedList as
            each node just has a pointer to the next node in the list. The only
            difference between that and a Doubly LinkedList is that if the
            example above were a Doubly LinkedList, then the b-node would have a
            previous pointer to the a-node, and the c-node would have a previous
            pointer to the b-node and the a-node would have a previous pointer
            to null as it is the first node in the list. We'll see the
            difference that having this previous pointer has on time complexity
            in a bit.
          </p>
          <Header as="h3">What kinds of methods does a LinkedList have?</Header>
          <p>Overall, LinkedLists have similar methods to ArrayLists</p>
          <Header as="h4">addToFront(Object element)</Header>
          <p>
            As you can probably predict, this method just adds the given element
            to the front of the list. To do this, a new node is instantiated
            with the given element as it's value. Then, that new nodes next
            variable is set to the current head of the list. And finally, the
            pointer to the head of the list is set to the new node. Now, the new
            element has been added to the front of the list in <code>O(1)</code>{" "}
            time. Take a look at the example below.
          </p>
          <LinkedListAddToFront />
          <p style={{ paddingTop: 32 }}>
            As you can see, a new node is created with the d value, its next
            pointer is set to the current head, and then the head is set to
            point to the newly added node.
          </p>
          <Header as="h4">addToBack(Object element)</Header>
          <p>
            This method is also pretty self explanatory: it simply adds a given
            element to the end of the list. The process of doing this is similar
            to the process of adding an element to the front of the list. You'd
            simply create a new node with the given value, set its next pointer
            to null (as the last node in the list always points to null), and
            then you'd update the current last node's next variable to point to
            the newly created node. And now the node is added to the end of the
            list. However, there is one thing to consider. Remember how it was
            mentioned that a LinkedList may have a head and a tail pointer or it
            may just have a tail pointer, well this is where having that tail
            pointer would impact the time complexity of this method. If you only
            have a head pointer, you'd have to iterate all the way to the end of
            the list to find which node is the last, and then you'd set that
            node's next variable to the new node, making this an{" "}
            <code>O(n)</code> operation. With a tail pointer, however, you
            already have access to the last node, so you don't have to iterate
            at all, making this an <code>O(1)</code> operation. Simply having a
            tail pointer makes the algorithm much simpler and much more
            efficient. Take a look at the example below in which we use the tail
            pointer, similar to Java's implementation.
          </p>
          <LinkedListAddToBack />
          <p>
            As you can see, a new node is created with the d value, its next
            pointer is set to null, the current tail's next pointer is set to
            the new node (adding the node to the list), and the tail then points
            to the newly added node instead.
          </p>
          <Header as="h4">removeFromFront()</Header>
          <p>
            This method has a couple different names across different languages,
            like <code>pop</code>, <code>removeFirst</code>, or just{" "}
            <code>remove</code>. You can probably already tell what this method
            does, but I'll tell you anyway. It simply removes the first element
            in the list, or the front element. If you read the section on
            ArrayLists, or if you already have some familiarity with ArrayLists,
            in order to remove from the front, you'd have to shift all of the
            remaining elements one to the left. The beauty of LinkedLists is
            that it simply uses nodes, so there is no shifting involved, which
            will result in an <code>O(1)</code> operation. To remove the first
            node, all one has to do set head variable to the current head's next
            variable. Many languages have automatic garbage collection, which
            means that if an object isn't used, it will automatically free that
            space in memory. However in some languages, like C, you'll have to
            do that yourself. Regardless, this method is super simpler and
            incredibly fast. Take a look at the example below.
          </p>
          <LinkedListRemoveFromFront />
          <Header as="h4">removeFromBack()</Header>
          <p>
            This method also has some different names like{" "}
            <code>removeLast</code>. This method simply removes the last element
            in the LinkedList. In this case, however, having a refernce to the
            tail in the LinkedList and having previous references in the nodes
            (i.e a DLL), can have a significant impact on the complexity of this
            method. With an SLL, you'd have to iterate through the list to find
            the second to last node in the list and set that node's next pointer
            to null (the same concepts of garbage collection mentioned earlier
            apply here as well), and then set the list's tail pointer to the
            current node. This becomes an <code>O(n)</code> operation. If we
            have a DLL, however, then all we have to do is access the current
            tail's previous reference, go to the node that comes before the
            tail, set it's next to null, and set the list's tail variable to the
            current node. This now becomes a <code>O(1)</code> operation. Take a
            look at the example below in which we use a DLL to make our removing
            more efficient.
          </p>
          <LinkedListRemoveFromBack />
          <Header as="h4">getFirst()</Header>
          <p>
            This method is pretty self explanatory, all it does it return the
            first element in the list. To do this, you would simply return the
            head, making this an <code>O(1)</code> operation.
          </p>
          <Header as="h4">getLast()</Header>
          <p>
            This method is also pretty self explanatory, as it returns the last
            element in the list. To do this, you would simply return the tail,
            also making this an <code>O(1)</code> operation. However, if you
            don't have a tail pointer, you'd have to iterate through the list to
            find the last element, which would make this an <code>O(n)</code>{" "}
            operation. In general, LinkedLists do have a tail, so this wouldn't
            be an issue.
          </p>
          <Header as="h4">get(int index)</Header>
          <p>
            This is another self explanatory get method, as it just returns the
            element at the given index. To do this, you'd simply iterate through
            the list up until the given index and return that element. We cannot
            simply access the given elment as we don't have an array, like with
            an ArrayList. That thus makes this a <code>O(n)</code> worst case
            operation, which is a disadvantage in comparison to ArrayLists that
            have a backing array and can access an index in <code>O(1)</code>{" "}
            time.
          </p>
          <Header as="h4">clear()</Header>
          <p>
            This method simply clears the LinkedList. The easiest way to do this
            is by setting the head pointer to null and letting Garbage
            Collection take care of the unused nodes as there will be no way to
            access them.
          </p>
          <Header as="h3">ArrayList vs LinkedLists</Header>
          <p>
            Now that you know about the operations of both ArrayLists and
            LinkedLists, we can start talking about the advantages of using an
            ArrayList versus the advantages of using LinkedLists. ArrayLists are
            better than LinkedLists in cases where you need to frequently access
            data from specific indexes as it is able to access data in{" "}
            <code>O(1)</code> time. LinkedLists are better when you don't really
            care about accessing data in the middle of the list, rather you are
            more focused on adding to the front and back of the list and
            likewise removing from the front and back of the list. We'll see
            these concepts come into play in just a bit with Stacks and Queues.
          </p>
          <Header as="h3" textAlign="center">
            Big O Cheat Sheet
          </Header>
          <BigOTable rows={linkedListBigOInfo} />
        </Container>
      </div>
    );
  }
}

export default LinkedListContainer;
