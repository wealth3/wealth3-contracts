//import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
//import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
describe("CreateContract", function(){
  it("Should create the contract", async function (){
    const [owner] = await ethers.getSigners();
    const Contract = await ethers.getContractFactory("Wealth3");
    const hardhatContract = await Contract.deploy();
  })
})
describe("CreateVault", function () {
 it("Should create a vault", async function () {
  const Contract = await ethers.getContractFactory("Wealth3");
  const hardhatContract = await Contract.deploy();
  console.log(await hardhatContract.createVault(10000000, 1000000, ethers.utils.parseEther("0.5"), ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266","0x70997970C51812dc3A010C7d01b50e0d17dc79C8"], [50,50], { value: ethers.utils.parseEther("0.5") }))
   });
 });
 describe("Deposit", function (){
   it("Should deposit money into an existing vault", async function (){
    const Contract = await ethers.getContractFactory("Wealth3");
    const hardhatContract = await Contract.deploy();
    console.log(await hardhatContract.deposit(ethers.utils.parseEther("1"),{ value: ethers.utils.parseEther("1") } ))
   })
 })
