class RotateCube{
    // field
    private camera: THREE.Camera;
    private scene: THREE.Scene;
    private renderer: THREE.WebGLRenderer;
    private geometry: THREE.Geometry;
    private material: THREE.Material;
    private mesh: THREE.Mesh;

    private w = 520;
    private h = 390;

    constructor()
    {
        this.camera = new THREE.PerspectiveCamera(75, this.w / this.h, 1, 10000);
        this.camera.position.z = 1000;

        this.scene = new THREE.Scene();

        this.geometry = new THREE.CubeGeometry(200, 200, 200);
        this.material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.mesh)
    }
}

// ウインドウロード時にアプリケーションを起動する
window.onload = () => {
    var rotateCube = new RotateCube();
};