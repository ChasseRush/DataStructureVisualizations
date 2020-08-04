"use-es6";
import React, { Component } from "react";
import { Header, Container, Divider } from "semantic-ui-react";
import { ReactComponent as StackBackedByLL } from "../svgs/Stack/stackBackedByLL.svg";
import { ReactComponent as StackBackedByArray } from "../svgs/Stack/stackBackedByArray.svg";
import StackPush from "../Components/StackPush";
import StackPop from "../Components/StackPop";
import { stackBigOInfo } from "../Constants/TableConstants";
import BigOTable from "../Components/BigOTable";

class StackContainer extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Header as="h2" textAlign="center" style={{ paddingTop: 32 }}>
          Intro to Stacks
        </Header>
        <Container className="text-container">
          <Header as="h3">What is a Stack?</Header>
          <p>
            A <strong>stack</strong> is what is known as a <strong>LIFO</strong>{" "}
            data structure. A <strong>LIFO</strong> data structure stands for{" "}
            <strong>Last In First Out</strong> in which we can only access
            whatever was last added to the data structure, hence the Last thing
            In is the First thing Out. You can imagine a Pringles can, in which
            you have a stack of Pringles chips. When you go to grab a chip and
            take it out of the stack, you can only grab the one on top of the
            stack. And then let's say you add a new chip in the Pringles can,
            maybe a barbeque one. When you go to grab a chip after that, you
            have to grab that barbeque one that you just added before you can
            get to any of the other chips. So, this stack data structure works
            in the same way as a stack of chips.
          </p>
          <p>
            Stacks have <code>three basic methods</code>:{" "}
            <code>push(Object element)</code>, <code>peek()</code>, and{" "}
            <code>pop()</code>. You would use <code>push(Object element)</code>{" "}
            when you want to add something to the top of the stack. You'd then
            use <code>pop()</code> when you want to get and remove the element
            on the top of the stack (like removing that barbeque Pringle we
            mentioned earlier). You'd use <code>peek()</code> however, if you
            just want to look at what the top of the stack is without actually
            removing it. This is like looking down into that Pringles container
            to see what chip is on top.
          </p>
          <Header as="h3">What goes into making a Stack?</Header>
          <p>
            A stack could be made two different ways: with a backing LinkedList
            or with a backing array. Additionally, stacks will have a size
            variable like the other data structures we've covered. With regards
            to using a backing LinkedList, all we would do is have the head of
            the LinkedList represent the top of the stack. Then, we would simply
            have to use LinkedList's <code>addToFront(Object element)</code>{" "}
            when we want to add something to the stack and{" "}
            <code>removeFromFront()</code> when we want to remove something from
            the stack. If we were to use a backing array, we would simply add
            and remove from index <code>size - 1</code>, similar to how we would
            add something to an ArrayList. The one benefit here, however, is
            that we don't have to shift any elements on remove like we would in
            an ArrayList as the top of the stack is actually at the end of the
            array (i.e at the <code>size - 1</code> index). The downside to
            using a backing array, however, is that you may have to resize the
            array and thus copy all the values over again if you run out of
            space in your current backing array.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Header as="h3">Backed by a LinkedList</Header>
            <StackBackedByLL style={{ width: "60%" }} />
            <Divider horizontal section>
              <Header as="h2">VERSUS</Header>
            </Divider>
            <Header as="h3">Backed by an Array</Header>
            <StackBackedByArray style={{ width: "60%" }} />
          </div>
          <Header as="h3">How do these methods work?</Header>
          <p>
            For the sake of simplicity, any visualizations shown for stacks
            below will use a backing LinkedList.
          </p>
          <Header as="h4">push(Object element)</Header>
          <p>
            As mentioned earlier, this method simply adds an element on top of
            the stack. Using a backing LinkedList, you would simply use
            LinkedList's <code>addToFront()</code> method. For an example of how
            that works, take a look at our{" "}
            <a
              onClick={() => history.push("linkedlist")}
              style={{ cursor: "pointer" }}
            >
              LinkedList section
            </a>
            . When using a backing array, you'd simply add the element to the
            end of the array (i.e where the size variable points). So, you would
            simply set <code>arr[size] = element</code> and then increment the{" "}
            <code>size</code> variable by 1. This is similar to ArrayList's{" "}
            <code>add(Object element)</code> method, and for an example of how
            that works, take a look at the{" "}
            <a
              onClick={() => history.push("arraylist")}
              style={{ cursor: "pointer" }}
            >
              ArrayList section.
            </a>{" "}
            Overall, this results in a complexity of <code>O(1)</code>.
          </p>
          <StackPush />
          <Header as="h4">pop()</Header>
          <p>
            As stated previously, this method removes and returns the first
            element off of the top of the stack. It's like "popping" the first
            Pringle off of the stack of Pringles. Using a backing LinkedList,
            you'd simply use LinkedList's <code>removeFromFront()</code> method.
            Again, for an example of that, checkout our{" "}
            <a
              onClick={() => history.push("linkedlist")}
              style={{ cursor: "pointer" }}
            >
              LinkedList section
            </a>
            . When using a backing array, you'd simply remove and return the
            element from index <code>size - 1</code> as that represnets the top
            of your stack. This also helps with runtime as you don't have to
            shift any elments over as you would with ArrayList's{" "}
            <code>remove(int index)</code>. This is because the bottom of the
            stack is at the very beginning of the array. Regardless of what you
            use to back the Stack, this results as a complexity of{" "}
            <code>O(1)</code> as with LinkedLists, you are just using a{" "}
            <code>O(1)</code> method (<code>removeFromFront()</code>) and with a
            backing array, you're just removing the item at the end of the array
            without having to shift any elements or search throughout the array.
          </p>
          <StackPop />
          <Header as="h4">peek()</Header>
          <p>
            This method simply returns the element at the top of the stack but
            does <strong>NOT</strong> remove it. This is like looking down the
            Pringles can to see what kind of Pringle is on top of the stack
            without taking it out, hence you're just peeking at the top of the
            stack. The implementation is very similar to <code>pop()</code>,
            except you don't remove the element. So, when using a backing
            LinkedList, you'd simply return the head. And when using a backing
            array, you'd just return the element at index <code>size - 1</code>.
            This obviously results in a complexity of <code>O(1)</code>.
          </p>
          <Header as="h3" textAlign="center" style={{ paddingTop: 24 }}>
            Big O Cheat Sheet
          </Header>
          <BigOTable rows={stackBigOInfo} />
        </Container>
      </div>
    );
  }
}

export default StackContainer;
