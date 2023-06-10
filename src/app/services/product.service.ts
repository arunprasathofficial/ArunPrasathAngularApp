import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList = [
    {
      productId: 1,
      productName: "ASUS ROG CROSSHAIR X670E EXTREME",
      productPrice: 489000.00,
      productDescription: "Bringing a legacy of ROG greatness along with a flurry of the latest tech for fully loaded builds, the ROG Crosshair X670E comfortably eases AMD Ryzen™ 7000 Series processors through the toughest workloads. Embrace the AM5 era with the indomitable kingpin of the ROG stack.",
      productImage: "assets/images/products/pro1.png"
    },
    {
      productId: 2,
      productName: "AMD Ryzen™ 9 7950X (up to 5.7Ghz 16-cores 32-threads) 80M Cache",
      productPrice: 220000.00,
      productDescription: "AMD Ryzen™ 9 Desktop Processors.\n# of CPU Cores 16\n# of Threads 32\nMax. Boost Clock Up to 5.7GHz\n",
      productImage: "assets/images/products/pro2.png"
    },
    {
      productId: 3,
      productName: "CORSAIR Vengeance RGB 64GB (2X32GB) DDR5 5200MHZ Memory",
      productPrice: 126500.00,
      productDescription: "Memory Series VENGEANCE DDR5\nMemory Type DDR5\nPMIC Type Overclock PMIC\nMemory Size 64GB (2 x 32GB)\nTested Latency 40-40-40-77\nTested Voltage 1.25V\nTested Speed 5200",
      productImage: "assets/images/products/pro3.png"
    },
    {
      productId: 4,
      productName: "Gigabyte AORUS GeForce RTX 4090 MASTER 24GB",
      productPrice: 814000.00,
      productDescription: "NVIDIA Ada Lovelace Streaming Multiprocessors: Up to 2x performance and power efficiency\n4th Generation Tensor Cores: Up to 4x performance with DLSS 3 vs. brute-force rendering\n3rd Generation RT Cores: Up to 2X ray tracing performance\nPowered by GeForce RTX™ 4090\nIntegrated with 24GB GDDR6X 384-bit memory interface\nWINDFORCE cooling system\nLCD Edge View\n",
      productImage: "assets/images/products/pro4.png"
    },
    {
      productId: 5,
      productName: "ASUS ROG Hyperion GR701 Full-Tower Gaming Case",
      productPrice: 175000.00,
      productDescription: "The world of PC building has changed. From next-gen graphics cards like the NVIDIA® GeForce RTX™ 4090 to faster-than-ever USB data rates and charging, a PC case needs to support the latest and greatest technologies. ASUS built the ROG Hyperion to be a durable, elegant chassis that is ready for the future of DIY gaming rigs — with an airflow-focused design that keeps components running in top shape.",
      productImage: "assets/images/products/pro5.png"
    },
    {
      productId: 6,
      productName: "Corsair H150 RGB 360mm Liquid CPU Cooler",
      productPrice: 51500.00,
      productDescription: "The CORSAIR H150 RGB all-in-one liquid CPU cooler delivers strong, dependable cooling and stunning lighting, with three CORSAIR SP120 RGB ELITE PWM fans, a 360mm radiator, and 37 RGB LEDs.",
      productImage: "assets/images/products/pro6.png"
    },
  ];

  constructor() { }

  getProductList() {
    return this.productList;
  }

  getProductItem(id:any) {
    return this.productList.find(i => i.productId == id);
  }
}
