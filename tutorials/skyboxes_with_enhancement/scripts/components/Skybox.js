import * as THREE from '../three/build/three.module.js';

export default class Skybox {
    constructor(params) {
        this._path = params['Path'];
        this._extension = params['File Extension'];
        this._skyboxSize = params['Skybox Size'];//Length of one side
        this._rotationSpeed = 2 * Math.PI * params['Rotations Per Minute'] / 60;
        this._cube;
    }

    addToParent(parentObject) {
        let materials = [];
        let sides = ['right', 'left', 'top', 'bottom', 'front', 'back'];
        let loader = new THREE.TextureLoader().setPath(this._path);
        for(let i = 0; i < sides.length; i++) {
            let texture = loader.load(sides[i] + this._extension);
            let material = new THREE.MeshBasicMaterial({
                map: texture,
                side: THREE.BackSide
            });
            materials.push(material);
        }
        let geometry = new THREE.BoxBufferGeometry(
            this._skyboxSize, this._skyboxSize, this._skyboxSize
        );
        this._cube = new THREE.Mesh(geometry, materials);
        parentObject.add(this._cube);
    }

    update(timeDelta) {
        if(this._cube) {
            this._cube.rotation.x += this._rotationSpeed * timeDelta;
        }
    }
}
