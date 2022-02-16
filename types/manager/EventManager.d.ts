import { Camera, Event, Intersection, Object3D, Scene, Vector2 } from "three";
import { EventDispatcher } from "../core/EventDispatcher";
import { PointerManager, VisPointerEvent } from "./PointerManager";
export interface ObjectEvent extends VisPointerEvent {
    intersection: Intersection<Object3D<Event>>;
}
export interface GlobalEvent extends VisPointerEvent {
    intersections: Intersection<Object3D<Event>>[];
}
export interface EventManagerParameters {
    scene: Scene;
    camera: Camera;
    recursive?: boolean;
    penetrate?: boolean;
}
export declare class EventManager extends EventDispatcher {
    private raycaster;
    private scene;
    private camera;
    private recursive;
    private penetrate;
    constructor(parameters: EventManagerParameters);
    setCamera(camera: Camera): this;
    intersectObject(mouse: Vector2): Intersection<Object3D<Event>>[];
    use(pointerManager: PointerManager): this;
}
