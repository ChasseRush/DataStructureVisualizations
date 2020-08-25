"use-es6";

import React, { Component } from "react";
import { Header, Container } from "semantic-ui-react";
import { hashMapBigOInfo } from "../Constants/TableConstants";
import BigOTable from "../Components/BigOTable";
import HashMapPutNoCollision from "../Components/HashMap/HashMapPutNoCollision";
import HashMapPutExternalChaining from "../Components/HashMap/HashMapPutExternalChaining";
import HashMapPutLinearProbing from "../Components/HashMap/HashMapPutLinearProbing";
import HashMapPutQuadraticProbing from "../Components/HashMap/HashMapPutQuadraticProbing";
import HashMapPutDoubleHash from "../Components/HashMap/HashMapPutDoubleHash";
import HashMapRemoveNoCollision from "../Components/HashMap/HashMapRemoveNoCollision";
import HashMapRemoveLinearProbing from "../Components/HashMap/HashMapRemoveLinearProbing";
import HashMapGetNoCollision from "../Components/HashMap/HashMapGetNoCollision";
import HashMapGetLinearProbing from "../Components/HashMap/HashMapGetLinearProbing";

class HashMapContainer extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Header as="h2" textAlign="center" style={{ paddingTop: 32 }}>
          Intro to HashMaps
        </Header>
        <Container className="text-container">
          <Header as="h3">What is a HashMap?</Header>
          <p>
            HashMaps are an incredibly important data structure to understand
            simply because of how efficient they are and how well they can allow
            us to add and access data using our own kinds of pointers. In order
            to understand what I mean by that however, you must know what a
            simple <strong>Map</strong> is.
          </p>
          <Header as="h4">What is a Map</Header>
          <p>
            {" "}
            A <strong>Map</strong>, simply put, is a collection of{" "}
            <code>{"<key, value>"}</code> pairs that is searchable and typically
            unordered. These keys are always unique, but the values don't have
            to necessarily be as well. Also, the values can change, but the keys
            themselves cannot; they can only be added or removed. This key is
            what we use to "point" to our value, hence the comment earlier about
            using our own kinds of pointers. For instance, let's say that we're
            building an app to remember our friends birthdays. Let's say our
            friend John's birthday is March 12 and our friend Sara's birthday is
            August 22. We always remember our friends' names, but not their
            birthdays. So, it would make sense for us to use their names as the
            key and their respective birthdays as the value. Our map may look
            something like this.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3>John {"-->"} March 12</h3>
            <h3 style={{ margin: 0, paddingBottom: 12 }}>
              Sara {"-->"} August 22
            </h3>
          </div>
          <p>
            Now if we want to know Sara's birthday, we'd just have to look at
            our map, use Sara's name as the key, and we'll get her birthday of
            August 22 in return.
          </p>
          <p>
            Now let's say that we have another friend with the name John, except
            is last name starts with a B, and his birthday is also on August 22.
            Let's say that our original John has a last name that starts with C.
            As stated earlier, keys must be unique. After all, one key can't
            point to two different values. The values themselves, however, don't
            have to be unique. But, now we have a problem with our key naming
            convention if we want to add John C to our Map, since we already
            have a John in our Map. What we can do instead is use the first
            initial of their last names to make sure that they're unique in our
            Map. This would give us a new Map that looks like this:
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3>John C{"-->"} March 12</h3>
            <h3 style={{ marginTop: 0 }}>Sara M{"-->"} August 22</h3>
            <h3 style={{ marginTop: 0, paddingBottom: 12 }}>
              John B {"-->"} August 22
            </h3>
          </div>
          <p>
            Now our keys are unique and our Map is good to go, even though we
            have duplicate values. So, we can use "John B" as our key and get
            his birthday of August 22 and we can use "Sara M" as the key for her
            birthday and get August 22 as well.
          </p>
          <Header as="h4">Back to the HashMap</Header>
          <p>
            Now that you understand what a Map is, we can start talking about
            what a HashMap is. A <strong>HashMap</strong> is a Map that is
            backed by an array that uses a{" "}
            <a href="https://en.wikipedia.org/wiki/Hash_function">
              hashing function
            </a>{" "}
            to hash the given key and then uses that hash to index the array. I
            know that might sound complex so let me break it down a bit.
            Basically, a key is given to the HashMap along with a value and the
            HashMap breaks that key down into something it can use to index the
            array quickly: an integer. So in our birthday example, you may pass
            in "Sara" as the key, and the HashMap would convert that to an
            integer and would use that integer to access and add to the backing
            array quickly. Now we can't guarantee that the string's hash will
            give us a number that is within the bounds of the array. So, in
            order to force this value into the bounds of our backing array, we
            simply mod the hash by the length of our array, like{" "}
            <code>index = hash % arr.length</code>. And thus we have our usuable
            index. Now, it should be said that the hashing function could vary
            across different implementations of HashMaps, but this is the
            general way that hashing the key to a usuable index works. Once the
            HashMap generates the key's index in the backing array using its
            hashing funciton, the HashMap can access the mapped item in{" "}
            <code>O(1)</code> time, making use of arrays' constant indexing.
          </p>
          <p>
            If you have some experience with data structures and hash codes, you
            may know that different objects may end up having the same hash. As
            a result, you're may end up with two keys having the same hash and
            then thus having the same index in the backing array. Now, you have
            a collision. So, HashMaps must also implement collision strategies
            so that it can handle cases where two keys end up with the same
            index based upon their hash code. We'll go over that in a bit, but a
            few common ones are <strong>linear probing</strong>,{" "}
            <strong>quadratic probing</strong>, and{" "}
            <strong>external chaining</strong>.
          </p>
          <Header as="h3">IMPORTANT:</Header>
          <p>
            One more important thing to note here is that when we're adding to
            the backing array of a HashMap, we're <strong>NOT</strong> actually
            adding the value directly to the backing array. This is because we
            need to keep a reference to the key so that we can check if the node
            we're looking at has the key that we were given. So, what we
            actually add is to the backing array is an Object that contains our
            key-value pair that we'll just call <code>Pair{"<K, V>"}</code> for
            the rest of this lesson / review / page / whatever you want to call
            this.
          </p>
          <p>
            One more key term to understand when talking about HashMaps is the{" "}
            <strong>load factor</strong>. The <strong>load factor</strong> is
            the percentage of the backing array that must be filled in order to
            trigger a resize of the backing array. For example, if the load
            factor is set to 75%, then once the backing array is filled to 75%,
            you'll have to do a resize of the array to ensure that there is
            enough space to add a new item and to maintain fast adding,
            accessing, and removing based upon the collision strategy used. So
            to wrap up, if{" "}
            <code>HashMap size / backing array size {">"}= loadFactor</code>{" "}
            then <code>resize()</code>.
          </p>
          <Header as="h3">What goes into making a HashMap?</Header>
          <p>
            Like I said earlier, a HashMap needs backing array and obviously a
            size variable, like most (if not all) data structures do. One other
            more complicated thing that a HashMap needs is its collision
            strategy and hashing function. As I mentioned earlier, there are a
            bunch of different collision strategies and they all have their own
            set of pros and cons. Once you have decided on your collision
            strategy and hashing function, you're ready to start implementing
            your HashMap.
          </p>
          <Header as="h3">What kinds of methods does a HashMap have?</Header>
          <Header as="h4" color="blue">
            put(K key, V value)
          </Header>
          <p>
            The put method adds the given <code>value</code> to the HashMap
            using the <code>key</code> given. In effect, it "puts" the given
            value at the given key in the map. One thing to note about this
            method is that if that key-value pair already exists and thus that
            key already has a value mapped to it, then that value is overriden
            by the new value. For instance, let's say we have a HashMap where
            our keys are our friends names and the values are their addresses.
            Let's say we have a friend at 123 Main Street in our HashMap, and
            then that friend moves. We would just use{" "}
            <code>put(friend, newAddress)</code> and override the old address
            with the new address.
          </p>
          <p>
            As mentioned earlier, we would use our hashing function to generate
            an index for our key. This hashing function should run in{" "}
            <code>O(1)</code> time. Once we have our index, we would simply add
            the value to that index <strong>IF</strong> there isn't a different
            key-value pair currently there <strong>AND</strong> the key of that
            key-value pair is different from our current key. Take a look at an
            example here. NOTE: In this example and all further examples, we'll
            be using a HashMap where we want to map our friends to their
            favorite colors.
          </p>
          <HashMapPutNoCollision />
          <p style={{ paddingTop: 16 }}>
            So, we create our new <code>Pair{"<K key, V value>"}</code> node and
            since there's nothing at the index we want to add it to, we just add
            it there.
          </p>
          <Header as="h5">
            But what if there's already a key-value pair at that index
          </Header>
          <p>
            If there is already a key-value pair at the index returned from your
            hashing function, and the key is not the same as the given key in
            the funciton, then you have a <strong>collision</strong>. We know
            that collisions can happen because different keys can have the same
            hashes, however that does not mean that they are the same key. Now,
            you must employ a <strong>collision strategy</strong> to handle
            this. As I mentioned earlier, there are a bunch of collision
            strategies that each have their own set of pros and cons. So, let's
            start going over them.
          </p>
          <Header as="h5">External chaining</Header>
          <p>
            External chaining relies on treating each entry in the backing array
            as the head of an{" "}
            <button
              onClick={() => history.push("linkedlist")}
              className="button-as-link"
            >
              LinkedList
            </button>
            . You would then iterate through the list at the index given from
            you hashing function, make sure that the key doesn't exist in it and
            if it does, then you'd replace it. If the key doesn't exist, then
            you'd add the key to the end of the list. Thus, you have handled the
            collision and added it to the HashMap. This can be troublesome,
            however, if you have a poor hashing function that always returns the
            same value as adding, getting from, and removing from the HashMap
            would become <code>O(n)</code> as you'd have to iterate through the
            entire list each time one of those methods are called. Take a look
            of this example of external chaining.
          </p>
          <HashMapPutExternalChaining />
          <p style={{ paddingTop: 16 }}>
            As you can see, we simply go to the index that our hashing function
            returns to us, and we add it to the end of the LinkedList that
            exists there since the key doesn't exist in that LinkedList already.
            If a LinkedList doesn't exist at that index, then we create one with
            the current key-value pair.
          </p>
          <Header as="h5">Linear probing</Header>
          <p>
            Linear probing is a fairly simple collision strategy. If you compute
            your index using your hashing function and there is a differeny
            key-value pair already there, you would simply increment your index
            by 1. And if something was there, you'd increment again. And you'd
            keep incrementing until you found a free space (NOTE: remember to
            mod by the length of the array to prevent an{" "}
            <code style={{ color: "red" }}>IndexOutOfBounds</code> error, i.e do{" "}
            <code>currentIndex = (currentIndex + 1) % arr.length</code>).
            Similar to <strong>external chaining</strong>, this can be
            troublesome with a poor hashing function as you'd end up iterating
            through the array index by index, resulting in a <code>O(n)</code>{" "}
            runtime. Obviously, having a good hashing function is crucial to a
            HashMap's efficiency. In any case, take a look at an example here of
            linear probing.
          </p>
          <HashMapPutLinearProbing />
          <p style={{ paddingTop: 16 }}>
            So, we check the index that our hashing function gives us, and since
            our backing array has a different{" "}
            <code>Pair{"<K key, V value>"}</code> there already, we keep
            incrementing our index until we find a free spot in our backing
            array. Once we find that, we add our new{" "}
            <code>Pair{"<K key, V value>"}</code> there.
          </p>
          <Header as="h5">Quadratic probing</Header>
          <p>
            Quadratic probing is very similar to linear probing, except instead
            of incrementing the index by 1, you'd increment the index by
            quadratic values. So, you'd have a <code>counter</code> variable
            that keeps track of the number of times you've incremented the
            index, and you'd add <code>counter * counter</code> to the index
            each time you have to increment it. So, you'd end up incrementing by{" "}
            <code>1 * 1</code>, and then <code>2 * 2</code>, and then{" "}
            <code>3 * 3</code> and so on. Obviously, like with linear probing,
            it is crucial to mod your index by the length of the array to avoid
            an <code style={{ color: "red" }}>IndexOutOfBounds</code> error.
            Typically, you'd stop incrementing and resize at some point if
            you've incremented a number of times without finding an empty space
            for the new key-value pair. This number of times could be equal to
            the size of the HashMap, so if there are four items in the HashMap,
            you'd increment up to four times, and if you still haven't found a
            spot of the new key-value pair, you'd resize like how you'd resize
            an{" "}
            <button
              onClick={() => history.push("arraylist")}
              className="button-as-link"
            >
              ArrayList
            </button>
            . This too could have inefficiencies with a poor hashing function
            and can result in an <code>O(n)</code> runtime worst case,
            especially if you end up having to resize your backing array.
          </p>
          <HashMapPutQuadraticProbing />
          <p style={{ paddingTop: 16 }}>
            As you can see, we check the index that our hashing function gives
            us, and since our backing array has a different{" "}
            <code>Pair{"<K key, V value>"}</code> there already, we keep
            incrementing quadratically (i.e hash() + 1 * 1, hash() + 2*2, ...)
            until we find a free spot in our backing array. Once we find that,
            we add our new <code>Pair{"<K key, V value>"}</code> there.
          </p>
          <Header as="h5">Double Hashing</Header>
          <p>
            Double hashing is a fairly simple but effective collision strategy
            that relies on creating a second hashing function to offset the
            results of the first hashing function. So, when a new key-value pair
            is added to the HashMap, you'd use your main hashing function to
            generate an index for it, but if there's a collision, then you'd use
            your second hashing function to offset the result of the main
            hashing function. The difference between the two hashing functions,
            however, is that the second one does not have to rely on the key, it
            could simply take in the index and add a constant to it, or mulitply
            it by a constant, or really do whatever to it. You'd also need a
            counter variable, similar to quadratic probing, to keep track of the
            number of times that you've had to check for a collision. You'd use
            this and mulitply it by the result of the second hashing function,
            and add that to the results of the first hashing function to
            generate your index. So, you'd end up with something like this{" "}
            <code>index = (hash1 + hash2 * counter) % arr.length</code>. As
            always, remember to mod your index by the length of the backing
            array to make sure you end up with a valid index. Similar to the
            other strategies we've seen, if you have a poor hashing function and
            a poor second hashing function, then this could result in iterating
            through the array entirely, making the worst case runtime{" "}
            <code>O(n)</code>. Take a look at an example here of double hashing.
          </p>
          <HashMapPutDoubleHash />
          <p style={{ paddingTop: 16 }}>
            As you can see, we check the index that our hashing function gives
            us, and since our backing array has a different{" "}
            <code>Pair{"<K key, V value>"}</code> there already, we keep
            incrementing our index by our second hashing function times the
            number of times we have to probe until we find a free spot in our
            backing array (hashedIndex + 0 * second(hashedIndex), hashedIndex +
            1 * second(hashedIndex), ...). Once we find that, we add our new{" "}
            <code>Pair{"<K key, V value>"}</code> there.
          </p>
          <Header as="h4" color="blue">
            remove(K key)
          </Header>
          <p>
            You could probably guess that this method simply removes the value
            at the given key, and you'd be right. This method simply removes and
            returns the value at the given key while also removing the key from
            the backing array itself. To do this, you'd simply locate the
            key-value pair in your backing array similarly to how you would in{" "}
            <code>add(K key)</code> while searching for the existence of the key
            and depending on the collision stragtegy you use, you'd either
            replace it with null or place a <code>removed</code> flag on the
            key-value pair. If you're using external chaining, then you can just
            remove the key-value pair from the LinkedList. However, if you're
            using linear or quadratic probing or even double hashing, then you
            must set a <code>removed</code> flag on the key-value pair. This is
            because other values could have been placed after the key-value pair
            you're removing and could have had its index impacted by the
            key-value pair you're removing. For example, let's say we add two
            key-value pairs that end up with an index of 1. If we use linear
            probing, then the second key-value pair would be placed at index 2
            since we already have a pair at index 1. Now let's say that we
            remove the value at index 1. If we set it to null, then we won't be
            able to find the value of the second pair because its key will give
            us an index of 1 but its actually located at index 2 due to linear
            probing, and once we hit a value of <code>null</code>, we stop and
            assume that we don't have it in our backing array. This would then
            lead us to falsely believe that it doesn't exist in our map.
            However, if we set a <code>removed</code> flag, then this will
            indicate to us that the key-value pair we're currently looking at
            was removed so we should keep searching. This would then lead us to
            probe once and find the key-value pair that we're actually looking
            for at index 2. Once we've found the item to remove, we'd then
            simply return the value of that key-value pair. If that key doesn't
            exist in the backing array, you'd simply return null without
            removing anything. Take a look at these examples below:
          </p>
          <HashMapRemoveNoCollision />
          <p style={{ paddingTop: 16 }}>
            As you can see, we get our index, check if the keys are the same,
            and if they are, then we've found our node to remove. Then, we can
            just remove its key and value from the pair and set the removed flag
            to true. Then we know for the future that this node has been removed
            but could have existed when another node was added and could have
            had a collision with it.
          </p>

          <p>
            Now let's take a look at what happens when we have a collision and
            we use linear probing.
          </p>
          <HashMapRemoveLinearProbing />
          <p style={{ paddingTop: 16 }}>
            As you can see, we get our index, check if the keys are the same,
            and since they aren't, we know that we have to use our collision
            strategy in order to find the correct key-value pair. Since we use
            linear probing, we just increment the index and check the keys
            again, and in this case, they are the same. So, we do the same as we
            did before, as we remove the key-value pair and set the removed flag
            to true.
          </p>
          <Header as="h4" color="blue">
            get(K key)
          </Header>
          <p>
            This method, as the name describes, simply gets the value at the
            current key. If the key doesn't exist in the backing array, meaning
            we find a null value in our backing array while looking for the key,
            then we just return null. This method should hopefully be a bit
            simpler of an explanation since we've already gone through and
            explained how you would find your key in <code>remove(K key)</code>.
            Actually, you would do the exact same thing as you would in{" "}
            <code>remove(K key)</code>, except you wouldn't remove the value and
            you'd just return it. So, if you have a collision, you would just
            use your collision strategy and you would continue to search for the
            key until you hit a null value. If you found a removed value (i.e a{" "}
            <code>Pair{"<K, V>"}</code> with a null value but a{" "}
            <code>removed</code> flag), then you'd continue to search. You'd
            only stop searching your backing array once you hit a null value.
            Once you've found your key-value pair, then you'd just return the
            value of that key-value pair. Take a look at a couple examples
            below.
          </p>
          <p>
            Let's first take a look at an example of getting a value using a
            given key where we don't have a collision.
          </p>
          <HashMapGetNoCollision />
          <p style={{ paddingTop: 16 }}>
            As you can see, this is fairly similar to <code>remove(K key)</code>
            , except instead of removing and returning the value at the given
            key, we just return the value. Now, let's take a look at an example
            where we have a collision.
          </p>
          <HashMapGetLinearProbing />
          <p>
            As you can see, we get our index as usual, and look for a node with
            the given key. Since the first node we checked has a{" "}
            <code>removed</code> flag on it, we know we have to keep searching
            for the key.
          </p>
          <Header as="h4" color="blue">
            getOrDefault(K key, V value)
          </Header>
          <p>
            This is an incredibly useful method that acts very similarly to{" "}
            <code>get(K key)</code>: it returns the value of the given key, and
            if the key does not exist, then it just returns the default value
            instead of null. This is useful for programs where you need to
            increment the count of something, like word count. If the word isn't
            in the backing array, then <code>get(K key)</code> would return null
            and obviously you can't increment a null value. So, this avoids your
            needing to perform a null check by returning a default value. In the
            case of counting, we would just return a default of 0, increment
            that, and use <code>put(K key, V incrementedValue)</code> to update
            the count in our HashMap. Just like with the other methods, this
            runs in best case <code>O(1)</code> time, but in worst case (i.e a
            bad hashing or resize function) <code>O(n)</code> time.
          </p>
          <Header as="h4" color="blue">
            clear()
          </Header>
          <p>
            This method just clears the backing array by instantiating a new
            array of default size.
          </p>
          <Header as="h3" textAlign="center">
            Big O Cheat Sheet
          </Header>
          <BigOTable rows={hashMapBigOInfo} />
        </Container>
      </div>
    );
  }
}

export default HashMapContainer;
