import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    let { sanPhamGH, xoaGH, tangGiamSoLuongSP } = this.props;
    return (
      <div
        class="modal fade"
        id="modelId"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document" style={{ maxWidth: "800px" }}>
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <td>Mã sản phẩm</td>
                    <td>Hình ảnh</td>
                    <td>Tên sản phẩm</td>
                    <td>Số lượng</td>
                    <td>Đơn giá</td>
                    <td>Thành tiền</td>
                  </tr>
                </thead>
                <tbody>
                  {sanPhamGH.map((spGH, index) => {
                    return (
                      <tr key={index}>
                        <td>{spGH.maSP}</td>
                        <td>
                          <img
                            src={spGH.hinhAnh}
                            alt=""
                            width="50"
                            height="75"
                          />
                        </td>
                        <td>{spGH.tenSP}</td>
                        <td>
                          <button
                            onClick={() => tangGiamSoLuongSP(spGH.maSP, false)}
                            className="btn btn-danger"
                          >
                            -
                          </button>
                          {spGH.soLuong}
                          <button
                            onClick={() => tangGiamSoLuongSP(spGH.maSP, true)}
                            className="btn btn-success"
                          >
                            +
                          </button>
                        </td>
                        <td>{spGH.giaBan.toLocaleString()}</td>
                        <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => xoaGH(spGH.maSP)}
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="4"></td>
                    <td>Tổng tiền:</td>
                    <td>
                      {sanPhamGH
                        .reduce((tongtien, sp, index) => {
                          return (tongtien += sp.giaBan * sp.soLuong);
                        }, 0)
                        .toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
