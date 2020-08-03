"use-es6";

import React, { Component } from "react";
import { Header, Container } from "semantic-ui-react";
import ArrayListAdd from "../Components/ArrayListAdd";
import ArrayListGetComponent from "../Components/ArrayListGetComponent";
import ArrayListRemove from "../Components/ArrayListRemove";
import BigOTable from "../Components/BigOTable";
import { arrayListBigOInfo } from "../Constants/TableConstants";

class ArrayListContainer extends Component {
  render() {
    return (
      <div>
        <Header as="h2" textAlign="center" style={{ paddingTop: 32 }}>
          Intro to ArrayLists
        </Header>
        <Container className="text-container">
          <Header as="h3">What is an ArrayList?</Header>
          <p>
            An ArrayList is a data structure that is pretty similar to a basic
            array. Its main difference, however, is that it is dynamically
            sized, whereas an array that has a static size.
          </p>
          <Header as="h3">
            What's the difference between static sizing and dynamic sizing?
          </Header>
          <p>
            <strong>Static sizing</strong> means that once a size is set, it
            cannot change. In Java for example, if you make an array of size 5,
            you cannot change the size of that array; you can put at most 5
            elements into that array. <strong>Dyanmic sizing</strong> means that
            the size of the data structure can change. So, the size of the
            ArrayList will change as you put more elements into it, you do not
            necessarily have to worry about setting a size for the data
            structure. So, you can just make an array list and then add 5, 10,
            15, 20 elements to it, and the data structure will handle it.
          </p>
          <Header as="h3">What goes into making an ArrayList?</Header>
          <p>
            An ArrayList is backed by a standard array. It also has a size
            variable that keeps track of the number of elements inside of the
            array, <strong>NOT</strong> the size of the backing array itself.
            Keeping track of the size of the array allows you to quickly add to
            the backing array, because you'll always know where the next empty
            index in the array is.
          </p>
          <Header as="h3">
            If we use a basic array to back the ArrayList, how is the ArrayList
            dynamically sized?
          </Header>
          <p>
            An ArrayList is dynamically sized because once we run out of space
            in our backing array, we resize the array and copy all of our values
            to our new array. Usually, we will resize our array to double its
            current size. So, let's say we have an ArrayList with an inital
            capacity of 10 and it's full. When we try to add a new value, we
            will resize the backing array to have a size of 20. And if that
            fills up, the next backing array will have a capacity of 40. The
            idea is that we will have to resize fewer and fewer times each time
            we resize, keeping our runtime to add an element at O(1) amortized.
          </p>
          <Header as="h3">What kinds of methods does an ArrayList have?</Header>
          <Header as="h4">new ArrayList()</Header>
          <p>
            This will instantiate our ArrayList, and since our backing array is
            statically typed, we need to give it an inital capacity. In Java,
            this defaults to 10.
          </p>
          <Header as="h4">add(Object element)</Header>
          <p>
            The add method does exactly what it sounds like; it adds the given
            element to the end of the ArrayList. Remember how I said that
            keeping track of that size variable was important, well here's why.
            Since arrays start at index 0, we always know that our size variable
            will keep track of where the next empty index is in our backing
            array. Take a look at this visualization. Let's say we want to add
            the number 8, here's what would happen.
          </p>
          <ArrayListAdd />
          <p style={{ paddingTop: 24 }}>
            So, the 8 is added to the end and the size variable is incremented
            by 1
          </p>
          <Header as="h4">get(int index)</Header>
          <p>
            The get function also does exactly what you would expect: it gets
            the element at the given index. It does not remove the value from
            the ArrayList, it simply finds what the element is and returns it.
            As a result, this operation is O(1), or constant time.
          </p>
          <ArrayListGetComponent />
          <p style={{ paddingTop: 24 }}>
            So, you just go to the given index and then return that element.
          </p>
          <Header as="h4">remove(Object element)</Header>
          <p>
            This remove method is also pretty self explanatory. It simply
            removes the first occurence of the given element. So, let's say our
            ArrayList was ["a", "b", "c", "b", "d"] and we called{" "}
            <code>arrayList.remove("b")</code>, we would end up with ["a", "c",
            "b", "d"] as the first occurence of "b" is removed. The remove
            method runs in worst case O(n) time. This is because you have to
            shift the elements that appear after it to the left once. So, like
            in our example, everything after the first "b" was shifted to the
            left by one. This can take at worst O(n) time if we were removing
            the very first element in the ArrayList. However, we do have a best
            case time of O(1) if we remove the very last element in the
            ArrayList as there are no elements to the right of it to shift. Take
            a look at the example below.
          </p>
          <ArrayListRemove />
          <Header as="h4">clear()</Header>
          <p>
            The clear method simply clears the ArrayList. The easiest way to do
            this by instantiating a new backing array, which will default to an
            empty array, and letting the existing backing array be garbage
            collected.
          </p>
          <Header as="h3" textAlign="center">
            Big O Cheat Sheet
          </Header>
          <BigOTable rows={arrayListBigOInfo} />
        </Container>
      </div>
    );
  }
}

export default ArrayListContainer;
