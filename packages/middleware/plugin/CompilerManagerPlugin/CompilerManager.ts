import { EventDispatcher } from "@vis-three/core";
import { BufferGeometry, Material, Object3D, Texture } from "three";
import { AnimationCompiler } from "../../animation";
import { CameraCompiler } from "../../camera";
import { SymbolConfig } from "../../common";
import { MODULETYPE } from "../../constants";
import { ControlsCompiler } from "../../controls";
import { CSS2DCompiler } from "../../css2D";
import { CSS3DCompiler } from "../../css3D";
import { EngineSupport } from "../../engine";
import { GeometryCompiler } from "../../geometry";
import { GroupCompiler } from "../../group";
import { LightCompiler } from "../../light";
import { LineCompiler } from "../../line";
import { MaterialCompiler } from "../../material";
import { MeshCompiler } from "../../mesh";
import { BasicCompiler, Compiler } from "../../module";
import { ObjectCompiler } from "../../object/ObjectCompiler";
import { Object3DCompiler } from "../../object3D";
import { PassCompiler } from "../../pass";
import { PointsCompiler } from "../../points";
import { RendererCompiler } from "../../renderer";
import { SceneCompiler } from "../../scene";
import { SpriteCompiler } from "../../sprite";
import { TextureCompiler } from "../../texture";

export interface CompilerManagerParameters {
  object3DCompiler: Object3DCompiler;
  cameraCompiler: CameraCompiler;
  lightCompiler: LightCompiler;
  geometryCompiler: GeometryCompiler;
  textureCompiler: TextureCompiler;
  materialCompiler: MaterialCompiler;
  rendererCompiler: RendererCompiler;
  sceneCompiler: SceneCompiler;
  controlsCompiler: ControlsCompiler;
  spriteCompiler: SpriteCompiler;
  lineCompiler: LineCompiler;
  meshCompiler: MeshCompiler;
  pointsCompiler: PointsCompiler;
  groupCompiler: GroupCompiler;
  passCompiler: PassCompiler;
  animationCompiler: AnimationCompiler;
  css3DCompiler: CSS3DCompiler;
  css2DCompiler: CSS2DCompiler;
}

export class CompilerManager extends EventDispatcher {
  object3DCompiler = new Object3DCompiler();
  cameraCompiler = new CameraCompiler();
  lightCompiler = new LightCompiler();
  geometryCompiler = new GeometryCompiler();
  textureCompiler = new TextureCompiler();
  materialCompiler = new MaterialCompiler();
  rendererCompiler = new RendererCompiler();
  sceneCompiler = new SceneCompiler();
  controlsCompiler = new ControlsCompiler();
  spriteCompiler = new SpriteCompiler();
  lineCompiler = new LineCompiler();
  meshCompiler = new MeshCompiler();
  pointsCompiler = new PointsCompiler();
  groupCompiler = new GroupCompiler();
  css3DCompiler = new CSS3DCompiler();
  css2DCompiler = new CSS2DCompiler();
  passCompiler = new PassCompiler();
  animationCompiler = new AnimationCompiler();

  compilerMap: Map<MODULETYPE, BasicCompiler>;

  constructor(parameters?: CompilerManagerParameters) {
    super();
    if (parameters) {
      Object.keys(parameters).forEach((key) => {
        this[key] = parameters[key];
      });
    }

    const compilerMap = new Map();

    Object.keys(this).forEach((key) => {
      const compiler = this[key];
      if (compiler instanceof Compiler) {
        compilerMap.set(compiler.MODULE, compiler);
      }
    });

    this.compilerMap = compilerMap;
  }

  /**
   * 获取该three物体的vid标识
   * @param object three object
   * @returns vid or null
   */
  getObjectSymbol<O extends Object3D>(object: O): SymbolConfig["vid"] | null {
    for (const compiler of this.compilerMap.values()) {
      const vid = compiler.getObjectSymbol(object);
      if (vid) {
        return vid;
      }
    }

    return null;
  }

  /**
   * 通过vid标识获取相应的three对象
   * @param vid vid标识
   * @returns three object || null
   */
  getObjectBySymbol(vid: string): any | null {
    for (const compiler of this.compilerMap.values()) {
      const object = compiler.getObjectBySymbol(vid);
      if (object) {
        return object;
      }
    }
    return null;
  }

  /**
   * 通过vid获取object3D对象
   * @param vid 物体vid标识
   * @returns Object3D | null
   */
  getObject3D<O extends Object3D>(vid: string): O | null {
    for (const compiler of this.compilerMap.values()) {
      if (compiler instanceof ObjectCompiler) {
        if (compiler.map.has(vid)) {
          return compiler.map.get(vid)! as O;
        }
      }
    }
    return null;
  }

  getGeometry<G extends BufferGeometry>(vid: string): G | null {
    return (this.geometryCompiler.map.get(vid) as G) || null;
  }

  getMaterial<M extends Material>(vid: string): M | null {
    return (this.materialCompiler.map.get(vid) as M) || null;
  }

  getTexture<T extends Texture>(vid: string): T | null {
    return (this.textureCompiler.map.get(vid) as T) || null;
  }

  dispose(): this {
    for (const compiler of this.compilerMap.values()) {
      compiler.dispose();
    }
    this.compilerMap.clear();
    return this;
  }
}
