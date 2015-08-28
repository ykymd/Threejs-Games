var RotateCube = (function () {
    function RotateCube() {
        this.w = 520;
        this.h = 390;
        this.camera = new THREE.PerspectiveCamera(75, this.w / this.h, 1, 10000);
        this.camera.position.z = 1000;
        this.scene = new THREE.Scene();
        this.geometry = new THREE.CubeGeometry(200, 200, 200);
        this.material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.mesh);
    }
    return RotateCube;
})();
// ウインドウロード時にアプリケーションを起動する
window.onload = function () {
    var rotateCube = new RotateCube();
};
//# sourceMappingURL=rotateCube.js.map