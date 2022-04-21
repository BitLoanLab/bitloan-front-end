<template>
  <div class="nft-detail">
    <div class="title">
      Order Details
    </div>
    <div class="nft-info">
      <img src="../assets/img/index_icon.png" alt="">
      <strong>
        Order NO.903 - PRQ V
      </strong>
    </div>
    <div class="nft-detail">
      <div class="nft-img">
        <img src="../assets/img/item_img.png" alt="">

      </div>
      <div class="detail-list">
        <div class="detail-item">
          <span>Floor Price</span>
          <strong>$ 10.00</strong>
        </div>
        <div class="detail-item">
          <span>Borrowing rate</span>
          <strong>50 %</strong>
        </div>
        <div class="detail-item">
          <span>Rate</span>
          <strong>5 %</strong>
        </div>
        <div class="detail-item">
          <span>Maximum loan</span>
          <strong>$ 4.5</strong>
        </div>

      </div>
      <div class="detail-list">
        <div class="detail-item">
          <span>Date</span>
          <strong>12 Months</strong>
        </div>
        <div class="detail-item">
          <span>Expire date</span>
          <strong>April 19, 2023</strong>
        </div>
        <div class="detail-item">
          <span>Liquidation rate</span>
          <strong>5 %</strong>
        </div>
      </div>
    </div>
    <div class="nft-operate-box">
      <div class="operate-title">
        Fixed Price
      </div>
      <div class="nft-price">
        <span>
          1RBT
        </span>
        <span>
          =
        </span>
        <span>
          1DAI
        </span>
      </div>
      <div class="exchange-box">
        <div class="input-box">
          <div class="input-detail">
          <span>
            Purchase By Amount
          </span>
            <div>
            <span>
              Max Available:
            </span>
              <strong>
                5,000
              </strong>
            </div>
          </div>
          <div class="input">
            <input type="text">
            <img src="" alt="">
            <span>BTC</span>
            <div class="max-btn">
              MAX
            </div>
          </div>
        </div>
        <div class="or-box">
          OR
        </div>
        <div class="input-box">
          <div class="input-detail">
          <span>
          Purchase By Value
          </span>
            <div>
            <span>
              Max Available:
            </span>
              <strong>
                5,000
              </strong>
            </div>
          </div>
          <div class="input">
            <input type="text">
            <img src="" alt="">
            <span>DAI</span>
            <div class="max-btn">
              MAX
            </div>
          </div>
        </div>
        <div class="operate-btns">
          <div class="operate">
            Approve
          </div>
          <div class="operate">
            Borrow
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "detail"
}
</script>

<style lang="scss" scoped>
.nft-detail {
  width: 1000px!important;
  margin: 0 auto;
  .nft-info {
    display: flex;
    align-items: center;
    margin: 10px 0;

    img {
      width: 18px;
      margin-right: 6px;
    }

  }

  .nft-detail {
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 5px 30px 5px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    border: 1px solid #F0F0F0;
    display: flex;
    padding: 20px;
    justify-content: space-between;
    img {

    }

    .detail-list {
      padding: 10px;
      width: 450px;
      .detail-item {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .nft-operate-box{
    margin-top: 30px;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 5px 30px 5px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    border: 1px solid #F0F0F0;
    position: relative;
    padding: 60px 0;
    .operate-title{
      position: absolute;
      top: 0;
      left: calc(50% - 100px);
      width: 200px;
      text-align: center;
      line-height: 38px;
      height: 38px;
      background: linear-gradient(90deg, #FF7F6C 0%, #FF5238 100%);
      border-radius: 0px 0px 20px 20px;
      color: #fff;
    }
    .nft-price{
      width: 230px;
      margin: 10px auto;
      display: flex;
      justify-content: space-between;
      font-size: 20px;
    }
    .exchange-box{
      width: 500px;
      margin: 30px auto;
      .input-box{
        .input-detail{
          display: flex;
          justify-content: space-between;
          padding: 6px 0 12px;
          font-size: 16px;
        }
        .input{
          height: 50px;
          background: rgba(255, 232, 215, 0.2);
          box-shadow: 0px 0px 15px 0px rgba(255, 84, 59, 0.2);
          border-radius: 10px;
          border: 1px solid   rgba(255, 127, 108, 1);
          display: flex;
          align-items: center;
          input {
            font-size: 18px;
            border: none;
            flex: 1;
            background: rgba(255, 232, 215, 0);
            height: 100%;
            padding: 0 6px;
            &:focus-visible {
              outline: none;
            }
          }
          .max-btn{
            width: 60px;
            height: 30px;
            background: linear-gradient(90deg, #FF7F6C 0%, #FF5238 100%);
            border-radius: 5px;
            color: #fff;
            line-height: 30px;
            text-align: center;
            cursor: pointer;
            margin: 0 10px;
          }
        }
      }
      .or-box{
        width: 60px;
        height: 30px;
        background: rgba(255, 139, 56, 0.2);
        border-radius: 15px;
        border: 1px solid #FFB47F;
        margin:  30px auto;
        text-align: center;
        line-height: 30px;
        font-weight: bold;
        color: #FF8B38;
      }
      .operate-btns{
        display: flex;
        margin-top: 30px;
        justify-content: space-between;
        .operate{
          width: 230px;
          height: 50px;
          color: #fff;
          line-height: 50px;
          text-align: center;
          background: linear-gradient(90deg, #FF7F6C 0%, #FF5238 100%);
          box-shadow: 0px 3px 10px 0px rgba(255, 82, 56, 0.5);
          border-radius: 10px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
