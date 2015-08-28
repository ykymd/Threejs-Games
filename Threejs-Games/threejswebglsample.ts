/// <reference path="Scripts\typings\threejs\three.d.ts"/>

module ThreeJSWebGLSample {
    export class Application {
        static run() {
            // WebGLレンダラーを作成
            try {
                var renderer = new THREE.WebGLRenderer({ antialias: true });
            } catch (e) { }

            if (renderer == null) {
                alert("NO WebGL");
                return;
            }

            // サイズの設定
            renderer.setSize(window.innerWidth, window.innerHeight);
            // 背景色の設定（色、透明度）
            renderer.setClearColorHex(0x000000, 1);
            // レンダラーによって、viewportのIDを持つHTML要素に子要素としてcanvasを追加
            document.querySelector("#viewport").appendChild(renderer.domElement);

            // カメラの作成
            var fov = 100;  // 画角
            var aspect = window.innerWidth / window.innerHeight;    // 縦横比
            var camera = new THREE.PerspectiveCamera(fov, aspect);
            camera.position = new THREE.Vector3(0, 0, 1000);    // z方向に1000ずらす

            var scene = new THREE.Scene();

            // ライトを作成
            var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position = new THREE.Vector3(0, 0, 1);
            scene.add(directionalLight);
            
            // メッシュの作成
            var geometory = new THREE.CubeGeometry(500, 500, 500);
            var material = new THREE.MeshPhongMaterial({
                color: 0xff0000,
                specular: 0xcccccc,
                shininess: 50,
                ambient: 0xffffff
            });
            var cubeMesh = new THREE.Mesh(geometory, material);
            scene.add(cubeMesh);

            var renderingAction = () => renderer.render(scene, camera);
            this.rotation(renderingAction, cubeMesh);
        }

        static rotation(rendering: () => void, rotateMesh: THREE.Mesh) {
            // 自転
            rotateMesh.rotation.x += 0.01;
            rotateMesh.rotation.y += 0.01;

            rendering();
            requestAnimationFrame(() => this.rotation(rendering, rotateMesh));
        }
    }
}

// ウインドウロード時にアプリケーションを起動する
window.onload = () => {
    ThreeJSWebGLSample.Application.run();
};