import ArrayListContainer from "../Containers/ArrayListContainer";
import LinkedListContainer from "../Containers/LinkedListContainer";
import StackContainer from "../Containers/StackContainer";
import QueueContainer from "../Containers/QueueContainer";
import HashMapContainer from "../Containers/HashMapContainer";

const structureMap = {
  arraylist: ArrayListContainer,
  linkedlist: LinkedListContainer,
  stack: StackContainer,
  queue: QueueContainer,
  hashmap: HashMapContainer,
};

export const getComponentToRender = (dataStructure) =>
  structureMap[dataStructure];
