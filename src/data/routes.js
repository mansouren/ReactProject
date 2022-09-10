import Nodes from "../components/pages/Nodes";
import ConnectorBroker from "../components/pages/ConnectorBroker";
import ChannelInfo from "../components/pages/ChannelInfo";
import ChannelKey from "../components/pages/ChannelKey";
import MessageMap from "../components/pages/MessageMap";
import Test from "../components/pages/test";
import Module from "../components/pages/Module";
import ModuleFormatter from "../components/pages/ModuleFormatter";
import ModuleServiceBroker from "../components/pages/ModuleServiceBroker";
import ModuleTP from "../components/pages/ModuleTP";
import NodeBroker from "../components/pages/NodeBroker";
import Route from "../components/pages/Route";
import Switch from "../components/pages/Switch";
import ModuleValidator from "../components/pages/ModuleValidator";
import ChannelBatch from "../components/pages/ChannelBatch";
import EntityID from "../components/pages/EntityID";
import Task from "../components/pages/Task";
import FieldSelect from "../components/pages/FieldSelect";

export const routes = [
  {
    path: "/nodes",
    name: "Nodes",
    icon: "bx-user",
    component: Nodes,
  },
  {
    path: "/connectorBroker",
    name: "ConnectorBroker",
    icon: "bx-message-square-detail",
    component: ConnectorBroker,
  },
  {
    path: "/channelInfo",
    name: "ChannelInfo",
    icon: "bx-bookmark",
    component: ChannelInfo,
  },
  {
    path: "/channelKey",
    name: "ChannelKey",
    icon: "bx-bookmark",
    component: ChannelKey,
  },
  {
    path: "/channelBatch",
    name: "ChannelBatch",
    icon: "bx-bookmark",
    component: ChannelBatch,
  },
  {
    path: "/messageMap",
    name: "MessageMap",
    icon: "bx-bookmark",
    component: MessageMap,
  },
  {
    path: "/module",
    name: "Module",
    icon: "bx-bookmark",
    component: Module,
  },
  {
    path: "/moduleFormatter",
    name: "ModuleFormatter",
    icon: "bx-bookmark",
    component: ModuleFormatter,
  },
  {
    path: "/moduleServiceBroker",
    name: "ModuleServiceBroker",
    icon: "bx-bookmark",
    component: ModuleServiceBroker,
  },
  {
    path: "/moduleTP",
    name: "ModuleTP",
    icon: "bx-bookmark",
    component: ModuleTP,
  },
  {
    path: "/moduleValidator",
    name: "ModuleValidator",
    icon: "bx-bookmark",
    component: ModuleValidator,
  },
  {
    path: "/nodeBroker",
    name: "NodeBroker",
    icon: "bx-bookmark",
    component: NodeBroker,
  },
  {
    path: "/route",
    name: "Route",
    icon: "bx-bookmark",
    component: Route,
  },
  {
    path: "/switch",
    name: "Switch",
    icon: "bx-bookmark",
    component: Switch,
  },
  {
    path: "/entityID",
    name: "EntityID",
    icon: "bx-bookmark",
    component: EntityID,
  },
  {
    path: "/task",
    name: "Task",
    icon: "bx-bookmark",
    component: Task,
  },
  {
    path: "/fieldSelect",
    name: "FieldSelect",
    icon: "bx-bookmark",
    component: FieldSelect,
  },
  {
    path: "/test",
    name: "Test",
    icon: "bx-bookmark",
    component: Test,
  },
];
