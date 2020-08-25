"use-es6";

import React, { Component } from "react";
import { Header, Container, Table, Button } from "semantic-ui-react";
import QueueAdd from "../Components/QueueAdd";
import StackPop from "../Components/StackPop";
import { queueBigOInfo } from "../Constants/TableConstants";
import BigOTable from "../Components/BigOTable";

class QueueContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleArray: ["C", "O", "D", "E"],
      exampleStep: 0,
      firstPointer: 0,
      lastPointer: 3,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handleClick() {
    const { exampleStep } = this.state;
    if (exampleStep === 0) {
      this.setState({
        exampleArray: ["", "O", "D", "E"],
        firstPointer: 1,
        exampleStep: 1,
      });
    } else if (exampleStep === 1) {
      this.setState({
        exampleArray: ["N", "O", "D", "E"],
        firstPointer: 1,
        lastPointer: 0,
        exampleStep: 2,
      });
    }
  }

  handleResetClick() {
    this.setState({
      exampleArray: ["C", "O", "D", "E"],
      exampleStep: 0,
      firstPointer: 0,
      lastPointer: 3,
    });
  }

  render() {
    const { exampleArray, firstPointer, lastPointer, exampleStep } = this.state;
    const { history } = this.props;
    const firstPointerStyles = {
      color: "blue",
    };
    const lastPointerStyles = {
      color: "purple",
    };
    const buttonText =
      exampleStep === 0 ? "remove()" : exampleStep === 1 ? `add(${"N"})` : "";
    return (
      <div>
        <Header as="h2" textAlign="center" style={{ paddingTop: 32 }}>
          Intro to Queues
        </Header>
        <Container className="text-container">
          <Header as="h3">What is a Queue?</Header>
          <p>
            A <strong>queue</strong> is what is known as a <strong>FIFO</strong>{" "}
            <strong>abstract data type</strong>. We have two new definitions
            here so I'll break them down one at a time. Similar to{" "}
            <button
              onClick={() => history.push("stack")}
              className="button-as-link"
            >
              LIFO
            </button>
            , <strong>FIFO</strong> stands for{" "}
            <strong>First in First out</strong>, in which we can only access the
            first thign that was added to the queue, and then the second, and
            the third, and then so on. You can think of this as a line of people
            (i.e a queue) where only one person can be removed from the line at
            a time, and it will always be the first person in line. An{" "}
            <strong>abstract data type</strong> is basically an outline on the
            expected behavior of the implemented data structure. It gives an
            idea as to how a data structure should be implemented, similar to an
            interface. Like we've seen with{" "}
            <button
              onClick={() => history.push("stack")}
              className="button-as-link"
            >
              stacks
            </button>
            , there can be different kinds of implementations using different
            kinds of backing strutures. Data structures are these
            implementations of the abstract data type.{" "}
          </p>

          <p>
            Now, back to what a queue actually does. As we stated earlier, a
            queue lets you access the first thing that was added to the list,
            and when adding to an item to a queue, it goes to the back of the
            list. Again, this is similar to waiting on line, where when you go
            on line, you always go to the back of the line. Then, after everyone
            before you has gone, you are at the front of the line and are then
            selected to hop on a ride, order your food, or just do whatever
            you're waiting on line to do. Obviously, a very simple use case of a
            queue is a waitlist app, since waitlists work exactly like a line
            you'd see in the real world.
          </p>

          <p>
            Queues have three basic methods, like{" "}
            <button
              onClick={() => history.push("stack")}
              className="button-as-link"
            >
              stacks
            </button>
            : <code>add(Object element)</code>, <code>remove()</code>, and{" "}
            <code>peek()</code>. They're all pretty self-explanatory;{" "}
            <code>add(Object element)</code> adds an item to the back of the
            queue, <code>remove()</code> removes and returns the item at the
            front of the queue, and <code>peek()</code> just returns the first
            item in the queue without removing it, just like in{" "}
            <button
              onClick={() => history.push("stack")}
              className="button-as-link"
            >
              stacks
            </button>
            . You can think of them like this: <code>add(Object element)</code>{" "}
            is when customer goes to the back of a line, <code>remove()</code>{" "}
            is when the customer at the front of the line is called to place
            their order, and <code>peek()</code> is when the cashier takes a
            look at the front of the line to see who's next.
          </p>

          <Header as="h3">What goes into making a Queue?</Header>
          <p>
            A queue can be made two different ways: with a backing LinkedList or
            with a backing array. Additionally, queues will have a size variable
            like the other data structures we've covered. Backing a queue with a
            LinkedList is simple, all you really need is an{" "}
            <button
              onClick={() => history.push("linkedlist")}
              className="button-as-link"
            >
              SLL
            </button>{" "}
            with a tail pointer. Then, the head would represent the front of the
            queue and the tail would represent the back of the queue. All you
            would need to do from there is simply implement LinkedList's{" "}
            <code>removeFromFront()</code> and{" "}
            <code>addToBack(Object element)</code> which we've covered
            previously. Things become a bit more tricky when using an array. You
            would need to have a pointer to the first element in the queue and a
            pointer to the last element in the queue. That way you can more
            efficiently access the elements in the front and in the back of the
            queue. However, let's say you add a couple of elements to the
            array-backed queue, and then remove some. When removing the elements
            in front, you'd remove the element from the array and increment the
            pointer to the first element by 1. Now you have empty space at the
            beginning of the array. In order to make the queue more efficient,
            you may end up having to wrap your pointer to the last element
            around the back of the array back to the front of it in order to
            avoid constant resizing. Let's take a look at an example of this.
            Let's say you have a queue and you add the letters 'c', 'o', 'd',
            'e' to it, and let's say the backing array is of length 4. For this
            example, our pointer to the first element in the queue will be blue
            and our pointer to the last element in the queue will be purple.
            Let's say we want to remove the first element and then add 'n' to
            the queue, here's what would happen with a backing array.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingBottom: 8,
            }}
          >
            {exampleStep !== 2 && (
              <Button onClick={this.handleClick}>{buttonText}</Button>
            )}
            <Button onClick={this.handleResetClick}>Reset example</Button>
          </div>

          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell
                  style={
                    firstPointer === 0
                      ? firstPointerStyles
                      : lastPointer === 0
                      ? lastPointerStyles
                      : {}
                  }
                >
                  0
                </Table.HeaderCell>
                <Table.HeaderCell
                  style={firstPointer === 1 ? firstPointerStyles : {}}
                >
                  1
                </Table.HeaderCell>
                <Table.HeaderCell>2</Table.HeaderCell>
                <Table.HeaderCell
                  style={lastPointer === 3 ? lastPointerStyles : {}}
                >
                  3
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                {exampleArray.map((letter) => (
                  <Table.Cell>{letter}</Table.Cell>
                ))}
              </Table.Row>
            </Table.Body>
          </Table>
          <p>
            As you can see, the pointer to the back of the queue wraps back
            around to the front to prevent a resizing of the array, but the
            pointers will always point to the first and last elements of the
            queue.
          </p>
          <Header as="h3">So, how do these methods work?</Header>
          <p>
            Similar to how we handled{" "}
            <button
              onClick={() => history.push("stack")}
              className="button-as-link"
            >
              stacks
            </button>
            , any visualizations below will use a backing LinkedList.
          </p>
          <Header as="h4">add(Object element)</Header>
          <p>
            Like other methods we've seen before, this method is often times
            referenced by various names including{" "}
            <code>enqueue(Object element)</code> and{" "}
            <code>push(Object element)</code>. I just want you to be aware of
            this in case you see it referenced using one of these various names.
            As I mentioned earlier, what happens here is basically the
            equivalent of using LinkedList's{" "}
            <code>addToBack(Object element)</code> method. We simply want to add
            something to the back of the line, so we'll just put it at the end
            of the list. As with <code>addToBack(Object element)</code>, this is
            an <code>O(1)</code> operation as we are simply creating a new node
            and updating the tail's pointers. NOTE: this is actually an
            amortized <code>O(1)</code> operation when using a backing array as
            you may have instances where you need to resize the backing array if
            you run out of space, resulting in the copying of every value in the
            current array. We're starting to see here the power of LinkedLists
            and how effective they can be when we want to simply focus on adding
            and removing from the front and the back. Let's take a look at an
            example where we want to add the character "d" to the end of the
            queue.
          </p>
          <QueueAdd />
          <p style={{ paddingTop: 12 }}>
            As you can see, it's simply put at the end of the list (or line if
            you will) in the exact same fashion as LinkedList's{" "}
            <code>addToBack</code> method.
          </p>
          <Header as="h4">remove()</Header>
          <p>
            As mentioned earlier, this method is also referenced using different
            names, like <code>pop()</code> and <code>dequeue()</code>. At the
            end of the day, however, they mean the same thing. All this method
            does is it returns and removes the item at the front of the queue
            (like the next person in line). To do this, we just remove and
            return the item at the front of the list, since we know that the
            head of our list represents the front of our queue. To do this,
            we'll simply follow the same procedures we followed in LinkedList's{" "}
            <code>removeFromFront()</code> and even stack's <code>pop()</code>{" "}
            (since <code>pop()</code> also removed and returned the head of the
            list). Similar to LinkedList's <code>removeFromFront()</code>, this
            is an <code>O(1)</code> operation when using a backing LinkedList as
            you have direct access to the head and you are simply updating the
            head's value. Let's take a look at an example.
          </p>
          <StackPop useQueue={true} />
          <p style={{ paddingTop: 12 }}>
            As you can see, we simply return our head and set our head pointer
            to the next element in the queue, just like in{" "}
            <code>removeFromFront()</code>.
          </p>
          <Header as="h4">peek()</Header>
          <p>
            This method simply returns the item at the front of the queue,
            similar to how in{" "}
            <button
              onClick={() => history.push("stack")}
              className="button-as-link"
            >
              stacks
            </button>
            , it returns the element at the top of the stack. However, it does{" "}
            <strong>NOT</strong> remove the element, it simply returns it. So,
            you would simply just return the head of your LinkedList without
            actually removing the head itself. This is just like the cashier in
            our example earlier that is peeking at the front of the line to see
            who is up next. Since you have direct access to the head of the
            queue, this is obviously an <code>O(1)</code> operation.
          </p>
          <Header as="h3" textAlign="center" style={{ paddingTop: 24 }}>
            Big O Cheat Sheet
          </Header>
          <BigOTable rows={queueBigOInfo} />
        </Container>
      </div>
    );
  }
}

export default QueueContainer;
